import { Route, Routes } from "react-router-dom";

import { Tasks } from "@/pages/tasks/tasks";
import { Layout } from "@/components/layout";
import { Employees } from "@/pages/employees/employees";
import { ErrorBoundaryWrapper } from "@/components/error-boundary";

export const App = () => {
  return (
    <>
      <ErrorBoundaryWrapper>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Employees />} />
            <Route path="/:employeeId" element={<Tasks />} />
          </Route>
        </Routes>
      </ErrorBoundaryWrapper>
    </>
  );
};
