import { ApiResponse } from "@/types/api";
import { api } from "./base";
import {
  Task,
  CreateTaskDto,
  UpdateTaskDto,
  GetAllTasksDto,
  GetDailyTaskSummaryDto,
  DailyTaskSummary,
} from "@/types/task";
import { stringifyQuery } from "@/lib/stringify-query";
import { Tags } from "@/types/tags";

export const taskApi = api.injectEndpoints({
  overrideExisting: false,
  endpoints: (builder) => ({
    createTask: builder.mutation<ApiResponse<Task>, CreateTaskDto>({
      query: (body) => ({
        url: `/tasks`,
        method: "POST",
        body,
      }),
      invalidatesTags: [Tags.TASKS],
    }),
    updateTask: builder.mutation<ApiResponse<Task>, UpdateTaskDto>({
      query: ({ description, employeeId, from, to }) => ({
        url: `/tasks`,
        method: "PUT",
        body: { description, employeeId, from, to },
      }),
        invalidatesTags: [Tags.TASKS],
    }),
    deleteTask: builder.mutation<void, number>({
      query: (taskId) => ({
        url: `/tasks/${taskId}`,
        method: "DELETE",
      }),
        invalidatesTags: [Tags.TASKS],
    }),
    getTask: builder.query<ApiResponse<Task>, number>({
      query: (taskId) => `/tasks/${taskId}`,
        providesTags: [Tags.TASKS],
    }),
    getTasks: builder.query<ApiResponse<Task[]>, GetAllTasksDto>({
      query: (query) => `/tasks?${stringifyQuery(query)}`,
      providesTags: [Tags.TASKS],
    }),
    getDailyTaskSummary: builder.query<ApiResponse<DailyTaskSummary>, GetDailyTaskSummaryDto>({
      query: (query) => `/tasks/daily-summary?${stringifyQuery(query)}`,
      providesTags: [Tags.TASKS],
    }),
  }),
});

export const {
  useCreateTaskMutation,
  useUpdateTaskMutation,
  useDeleteTaskMutation,
  useGetTaskQuery,
  useGetTasksQuery,
  useGetDailyTaskSummaryQuery,
} = taskApi;