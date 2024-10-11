import { ApiResponse } from "@/types/api";
import { api } from "./base";
import {
  CreateEmployeeDto,
  Employee,
  GetAllEmployeesDto,
  UpdateEmployeeDto,
} from "@/types/employee";
import { stringifyQuery } from "@/lib/stringify-query";
import { Tags } from "@/types/tags";

export const employeeApi = api.injectEndpoints({
  overrideExisting: false,
  endpoints: (builder) => ({
    createEmployee: builder.mutation<ApiResponse<Employee>, CreateEmployeeDto>({
      query: (body) => ({
        url: `/employees`,
        method: "POST",
        body,
      }),
      invalidatesTags: [Tags.EMPLOYEES],
    }),
    updateEmployee: builder.mutation<ApiResponse<Employee>, UpdateEmployeeDto>({
      query: ({ employeeId, name }) => ({
        url: `/employees/${employeeId}`,
        method: "PUT",
        body: { name },
      }),
      invalidatesTags: [Tags.EMPLOYEES],
    }),
    deleteEmployee: builder.mutation<void, number>({
      query: (employeeId) => ({
        url: `/employees/${employeeId}`,
        method: "DELETE",
      }),
      invalidatesTags: [Tags.EMPLOYEES],
    }),
    getEmployee: builder.query<ApiResponse<Employee>, number>({
      query: (employeeId) => `/employees/${employeeId}`,
      providesTags: [Tags.EMPLOYEES],
    }),
    getEmployees: builder.query<ApiResponse<Employee[]>, GetAllEmployeesDto>({
      query: (query) => `/employees?${stringifyQuery(query)}`,
      providesTags: [Tags.EMPLOYEES],
    }),
  }),
});

export const {
  useCreateEmployeeMutation,
  useUpdateEmployeeMutation,
  useDeleteEmployeeMutation,
  useGetEmployeeQuery,
  useGetEmployeesQuery,
} = employeeApi;
