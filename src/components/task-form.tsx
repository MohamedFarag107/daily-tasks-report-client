import React, { useEffect, useMemo } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { AlertTriangle } from "lucide-react";
import { toast } from "sonner";
import {
  set,
  differenceInMinutes,
  formatDuration,
  intervalToDuration,
  startOfDay,
  addMinutes,
} from "date-fns";

import { TimePicker12Hour } from "@/components/time-picker-12hour";
import { Task } from "@/types/task";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useCreateTaskMutation, useUpdateTaskMutation } from "@/api/task";
import { serializedError } from "@/lib/serialized-error";
import { useAppDispatch } from "@/store/store";
import { clearTask } from "@/store/task-slice";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

interface TaskFormProps {
  task?: Task;
  date: Date;
  maxMinutes: number;
  employeeId: number;
}

const formSchema = (maxMinutes: number, task?: Task) =>
  z
    .object({
      description: z
        .string()
        .min(5, "Description must be at least 5 characters"),
      from: z.date(),
      to: z.date(),
    })
    .refine((data) => data.to > data.from, {
      message: "To date must be greater than from date",
      path: ["to"],
    })
    .refine(
      (data) => {
        const duration = differenceInMinutes(data.to, data.from);
        if (task) {
          const originalDuration = differenceInMinutes(
            new Date(task.to),
            new Date(task.from)
          );
          return duration <= maxMinutes + originalDuration;
        }
        return duration <= maxMinutes;
      },
      {
        message: `Total duration must be less than or equal to ${
          formatDuration(
            intervalToDuration({
              start: startOfDay(new Date()),
              end: addMinutes(startOfDay(new Date()), maxMinutes),
            })
          ) || "0 minutes"
        }`,
        path: ["to"],
      }
    );

type FormType = z.infer<ReturnType<typeof formSchema>>;

export const TaskForm: React.FC<TaskFormProps> = ({
  date,
  task,
  maxMinutes,
  employeeId,
}) => {
  const defaultValues = useMemo(
    () => ({
      description: task?.description ?? "",
      from: task ? new Date(task.from) : date,
      to: task ? new Date(task.to) : addMinutes(date, Math.min(maxMinutes, 30)),
    }),
    [date, task]
  );

  const [createTask, { isLoading: isCreateTaskLoading }] =
    useCreateTaskMutation();

  const [updateTask, { isLoading: isUpdateTaskLoading }] =
    useUpdateTaskMutation();

  const isLoading = isCreateTaskLoading || isUpdateTaskLoading;

  const form = useForm<FormType>({
    resolver: zodResolver(formSchema(maxMinutes, task)),
    defaultValues,
    mode: "onBlur",
  });

  useEffect(() => {
    if (task) {
      form.reset(defaultValues);
    } else {
      const updateTime = (time: Date) => {
        return set(new Date(date), {
          hours: time.getHours(),
          minutes: time.getMinutes(),
          seconds: time.getSeconds(),
        });
      };

      form.setValue("from", updateTime(form.getValues("from")));
      form.setValue("to", updateTime(form.getValues("to")));
      form.setValue("description", "");
    }
  }, [defaultValues]);

  const dispatch = useAppDispatch();

  const resetForm = () => {
    dispatch(clearTask());
    form.reset({
      description: "",
      from: date,
      to: addMinutes(date, Math.min(maxMinutes, 30)),
    });
  };

  function onSubmit({ description, from, to }: FormType) {
    if (isLoading) return;

    if (!task) {
      return toast.promise(
        createTask({
          description,
          employeeId,
          from: from.toISOString(),
          to: to.toISOString(),
        }).unwrap(),
        {
          loading: "Creating task...",
          success: ({ message }) => {
            resetForm();
            return message;
          },
          error: (error) => {
            return serializedError(error).error;
          },
        }
      );
    }

    return toast.promise(
      updateTask({
        taskId: task.id,
        description,
        employeeId,
        from: from.toISOString(),
        to: to.toISOString(),
      }).unwrap(),
      {
        loading: "Updating task...",
        success: ({ message }) => {
          resetForm();
          return message;
        },
        error: (error) => {
          return serializedError(error).error;
        },
      }
    );
  }

  const duration = () => {
    const from = form.watch("from");
    const to = form.watch("to");

    const timeDuration = formatDuration(
      intervalToDuration({
        start: from,
        end: to,
      })
    );

    return timeDuration ? `Current Task Duration is: ${timeDuration}` : "";
  };

  const taskDuration = useMemo(duration, [
    form.watch("from"),
    form.watch("to"),
  ]);

  return (
    <>
      {maxMinutes === 0 && (
        <Alert variant="default" className="bg-yellow-50 border-yellow-300">
          <AlertTriangle className="h-4 w-4 text-yellow-600" />
          <AlertTitle className="text-yellow-800">
            Time Limit Exceeded
          </AlertTitle>
          <AlertDescription className="text-yellow-700">
            You have exceeded the 8-hour task duration. You can not create more
            tasks for today.
          </AlertDescription>
        </Alert>
      )}

      {taskDuration ? <Badge>{taskDuration}</Badge> : ""}

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Description <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Textarea
                    className="min-h-32"
                    placeholder="Task Description"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Enter a brief description of the task you performed.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="from"
              render={() => (
                <FormItem>
                  <FormLabel>
                    From <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <TimePicker12Hour
                      date={form.getValues("from")}
                      setDate={(date) => form.setValue("from", date!)}
                    />
                  </FormControl>
                  <FormDescription>
                    Select the time you will start the task.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="to"
              render={() => (
                <FormItem>
                  <FormLabel>
                    To <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <TimePicker12Hour
                      date={form.getValues("to")}
                      setDate={(date) => form.setValue("to", date!)}
                    />
                  </FormControl>
                  <FormDescription>
                    Select the time you will finish the task.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex items-center gap-3">
            <Button
              type="submit"
              disabled={task ? isLoading : isLoading || maxMinutes === 0}
            >
              {task ? "Update Task " : "Create Task "}{" "}
            </Button>
            {task && (
              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  resetForm();
                }}
              >
                Cancel
              </Button>
            )}
          </div>
        </form>
      </Form>
    </>
  );
};
