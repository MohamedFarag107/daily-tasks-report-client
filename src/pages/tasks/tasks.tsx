import { useParams } from "react-router-dom";

import { DailyTaskSummary } from "@/components/daily-task-summary";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import { formateTaskDate } from "@/lib/date";
import { Card } from "@/components/ui/card";
import { EmployeeCard } from "@/components/employee-card";
import { TaskForm } from "@/components/task-form";
import { useGetDailyTaskSummaryQuery } from "@/api/task";
import { serializedError } from "@/lib/serialized-error";

export const Tasks = () => {
  const { employeeId } = useParams();
  const [date, setDate] = useState<Date>(new Date());

  const { data, isLoading, isError, error } = useGetDailyTaskSummaryQuery({
    date: formateTaskDate(date),
    employeeId: employeeId!,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {serializedError(error).error}</div>;
  }

  return (
    <div className="mt-4 space-y-4">
      <EmployeeCard employeeId={employeeId!} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <DailyTaskSummary date={date} data={data?.data} />
        <Card>
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

      <TaskForm
        date={date}
        maxMinutes={data?.data.remaining_minutes || 0}
        employeeId={Number(employeeId!)}
      />
    </div>
  );
};
