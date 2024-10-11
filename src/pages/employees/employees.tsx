import { EmployeeForm } from "@/components/employee-form";
import { EmployeesTable } from "@/components/employees-table";
import { useAppSelector } from "@/store/store";

export const Employees = () => {
  const employee = useAppSelector((state) => state.employee.employee);
  return (
    <div className="my-4 space-y-4">
      <EmployeeForm employee={employee} />
      <EmployeesTable />
    </div>
  );
};
