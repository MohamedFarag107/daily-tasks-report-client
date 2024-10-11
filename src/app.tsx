import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";

import { Layout } from "@/components/layout";
import { ErrorBoundaryWrapper } from "@/components/error-boundary";
import { Loader } from "@/components/loader";

const Tasks = lazy(() => import("@/pages/tasks/tasks"));
const Employees = lazy(() => import("@/pages/employees/employees"));

export const App = () => {
  return (
    <>
      <ErrorBoundaryWrapper>
        <Suspense fallback={<Loader fullScreen />}>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Employees />} />
              <Route path="/:employeeId" element={<Tasks />} />
            </Route>
          </Routes>
        </Suspense>
      </ErrorBoundaryWrapper>
    </>
  );
};
