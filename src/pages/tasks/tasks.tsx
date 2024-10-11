import { useParams } from "react-router-dom";

import { DailyTaskSummary } from "@/components/daily-task-summary";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import { formateTaskDate } from "@/lib/date";
import { Card } from "@/components/ui/card";
import { EmployeeCard } from "@/components/employee-card";
import { TaskForm } from "@/components/task-form";
import { useGetDailyTaskSummaryQuery } from "@/api/task";
import { TasksTable } from "@/components/task-table";
import { useAppSelector } from "@/store/store";
import { TaskPageLoading } from "@/components/task-page-loading";
import { ErrorCard } from "@/components/error-card";

export default function Tasks() {
  const { employeeId } = useParams();
  const [date, setDate] = useState<Date>(new Date());

  const task = useAppSelector((state) => state.task.task);

  const { data, isLoading, isError, error } = useGetDailyTaskSummaryQuery({
    date: formateTaskDate(date),
    employeeId: employeeId!,
  });

  if (isLoading) return <TaskPageLoading />;
  if (isError) return <ErrorCard error={error} />;

  return (
    <div className="space-y-4 my-4">
      <EmployeeCard employeeId={employeeId!} />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <DailyTaskSummary date={date} data={data?.data} />
        <Card className="flex justify-center items-center">
          <Calendar
            mode="single"
            selected={date}
            onSelect={(day) => {
              if (day) {
                setDate(day);
              }
            }}
            className="w-full"
            classNames={{
              months:
                "flex w-full flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0 flex-1",
              month: "space-y-4 w-full flex flex-col",
              table: "w-full h-full border-collapse space-y-1",
              head_row: "",
              row: "w-full mt-2",
            }}
          />
        </Card>
      </div>
      <TasksTable date={date} employeeId={Number(employeeId!)} />
      <TaskForm
        date={date}
        maxMinutes={data?.data.remaining_minutes || 0}
        task={task}
        employeeId={Number(employeeId!)}
      />
    </div>
  );
}
