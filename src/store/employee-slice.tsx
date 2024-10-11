import { Employee } from "@/types/employee";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface EmployeeState {
  employee?: Employee;
}

const initialState: EmployeeState = {};

const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    setEmployee: (state, action: PayloadAction<Employee>) => {
      state.employee = action.payload;
    },
    clearEmployee: (state) => {
      state.employee = undefined;
    },
  },
});

export const { clearEmployee, setEmployee } = employeeSlice.actions;
export const employeeReducer = employeeSlice.reducer;
