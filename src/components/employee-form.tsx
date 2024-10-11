import React, { useEffect, useMemo } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { serializedError } from "@/lib/serialized-error";
import { useAppDispatch } from "@/store/store";
import { clearEmployee } from "@/store/employee-slice";
import { Card, CardContent } from "@/components/ui/card";
import { Employee } from "@/types/employee";
import {
  useCreateEmployeeMutation,
  useUpdateEmployeeMutation,
} from "@/api/employee";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

interface EmployeeFormProps {
  employee?: Employee;
}

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
});

type FormType = z.infer<typeof formSchema>;

export const EmployeeForm: React.FC<EmployeeFormProps> = ({ employee }) => {
  const defaultValues = useMemo(
    () => ({
      name: employee?.name ?? "",
    }),
    [employee]
  );

  const [createEmployee, { isLoading: isCreateEmployeeLoading }] =
    useCreateEmployeeMutation();

  const [updateEmployee, { isLoading: isUpdateEmployeeLoading }] =
    useUpdateEmployeeMutation();

  const isLoading = isCreateEmployeeLoading || isUpdateEmployeeLoading;

  const form = useForm<FormType>({
    resolver: zodResolver(formSchema),
    defaultValues,
    mode: "onBlur",
  });

  useEffect(() => {
    form.reset(defaultValues);
  }, [defaultValues]);

  const dispatch = useAppDispatch();

  const resetForm = () => {
    dispatch(clearEmployee());
    form.reset({ name: "" });
  };

  function onSubmit({ name }: FormType) {
    if (isLoading) return;

    if (!employee) {
      return toast.promise(createEmployee({ name }).unwrap(), {
        loading: "Creating employee...",
        success: ({ message }) => {
          resetForm();
          return message;
        },
        error: (error) => {
          return serializedError(error).error;
        },
      });
    }

    return toast.promise(
      updateEmployee({ employeeId: employee.id, name }).unwrap(),
      {
        loading: "Updating employee...",
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

  return (
    <>
      <Card className="w-full">
        <CardContent className="p-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Name <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Employee Name" {...field} />
                    </FormControl>
                    <FormDescription>
                      Enter the name of the employee.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex items-center gap-3">
                <Button type="submit" disabled={isLoading}>
                  {employee ? "Update Employee" : "Create Employee"}
                </Button>
                {employee && (
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
        </CardContent>
      </Card>
    </>
  );
};
