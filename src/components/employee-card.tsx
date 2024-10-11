import { useGetEmployeeQuery } from "@/api/employee";
import { serializedError } from "@/lib/serialized-error";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { format } from "date-fns";

interface EmployeeCardProps {
  employeeId: string;
}

export const EmployeeCard: React.FC<EmployeeCardProps> = ({ employeeId }) => {
  const { data, isLoading, isError, error } = useGetEmployeeQuery(
    Number(employeeId)
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>{serializedError(error).error}</div>;
  }

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
