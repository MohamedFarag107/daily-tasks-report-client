import { format } from "date-fns";

import { useGetEmployeeQuery } from "@/api/employee";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { EmployeeCardSkeleton } from "@/components/task-page-loading";
import { ErrorCard } from "@/components/error-card";

interface EmployeeCardProps {
  employeeId: string;
}

export const EmployeeCard: React.FC<EmployeeCardProps> = ({ employeeId }) => {
  const { data, isLoading, isError, error } = useGetEmployeeQuery(
    Number(employeeId)
  );

  if (isLoading) return <EmployeeCardSkeleton />;
  if (isError) return <ErrorCard error={error} />;

  const employee = data?.data!;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Hi, {employee.name}👋 </CardTitle>
      </CardHeader>
      <CardContent>
        The employee profile for {employee.name} was initially created on{" "}
        {format(new Date(employee.created_at), "MMMM dd, yyyy hh:mm a")}, and
        last updated on{" "}
        {format(new Date(employee.updated_at), "MMMM dd, yyyy hh:mm a")}.
      </CardContent>
    </Card>
  );
};
