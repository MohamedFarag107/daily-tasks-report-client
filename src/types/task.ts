export interface Task {
  id: number;
  description: string;
  from: string;
  to: string;
  duration: number;
  date: string;
  employeeId: number;
  created_at: string;
  updated_at: string;
}

export interface CreateTaskDto {
  description: Task["description"];
  employeeId: number;
  from: Task["from"];
  to: Task["to"];
}

export interface UpdateTaskDto {
  taskId: Task["id"];
  description: Task["description"];
  employeeId: number;
  from: Task["from"];
  to: Task["to"];
}

export type GetAllTasksDto = Record<string, string | number | boolean>;

export type GetDailyTaskSummaryDto = {
  date: string;
  employeeId: string;
};

export type DailyTaskSummary = {
  remaining_minutes: number;
  total_minutes: number;
};
