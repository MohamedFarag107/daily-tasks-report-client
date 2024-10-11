export interface Employee {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
}

export interface CreateEmployeeDto {
  name: Employee["name"];
}

export interface UpdateEmployeeDto {
  name: Employee["name"];
  employeeId: Employee["id"];
}

export type GetAllEmployeesDto = Record<string, string | number | boolean>;
