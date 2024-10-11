import React, { useEffect, useMemo } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  set,
  differenceInMinutes,
  formatDuration,
  intervalToDuration,
  startOfDay,
  addMinutes,
} from "date-fns";

import { TimePicker12Hour } from "./time-picker-12hour";
import { Task } from "@/types/task";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { useCreateTaskMutation } from "@/api/task";
import { toast } from "sonner";
import { serializedError } from "@/lib/serialized-error";

interface TaskFormProps {
  task?: Task;
  date: Date;
  maxMinutes: number;
  employeeId: number;
}

const formSchema = (maxMinutes: number) =>
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
    .refine((data) => differenceInMinutes(data.to, data.from) <= maxMinutes, {
      message: `Total duration must be less than or equal to ${formatDuration(
        intervalToDuration({
          start: startOfDay(new Date()),
          end: addMinutes(startOfDay(new Date()), maxMinutes),
        })
      )}`,
      path: ["to"],
    });

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
      to: task ? new Date(task.to) : date,
    }),
    [date, task]
  );

  const [createTask, { isLoading: isCreateTaskLoading }] =
    useCreateTaskMutation();

  const isLoading = isCreateTaskLoading;

  const form = useForm<FormType>({
    resolver: zodResolver(formSchema(maxMinutes)),
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
    }
  }, [date, task]);

  const resetForm = () => {
    form.reset({ description: "", from: date, to: date });
  };

  function onSubmit({ description, from, to }: FormType) {
    if (isLoading) return;

    if (!task) {
      toast.promise(
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
  }

  return (
    <>
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
                  <Textarea placeholder="Task Description" {...field} />
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
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    From <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <TimePicker12Hour
                      date={form.getValues("from")}
                      setDate={(date) => form.setValue("from", date!)}
                      {...field}
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
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    To <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <TimePicker12Hour
                      date={form.getValues("to")}
                      setDate={(date) => form.setValue("to", date!)}
                      {...field}
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
          <Button type="submit" disabled={isLoading || maxMinutes === 0}>
            Submit
          </Button>
        </form>
      </Form>
    </>
  );
};
