import { ErrorBoundary, FallbackProps } from "react-error-boundary";

import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout";
import { serializedError } from "@/lib/serialized-error";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface ErrorFallbackProps extends FallbackProps {}
export const FallbackRender: React.FC<ErrorFallbackProps> = ({
  error,
  resetErrorBoundary,
}) => {
  return (
    <Layout>
      <div className="mt-4">
        <Card>
          <CardHeader>
            <CardTitle>Error</CardTitle>
          </CardHeader>
          <CardContent>
            <h1>{serializedError(error).error}</h1>
            <p>
              Something went wrong. Please try again. If the problem persists,
              please contact support.
            </p>
          </CardContent>
          <CardFooter>
            <Button
              onClick={() => {
                resetErrorBoundary();
              }}
            >
              Retry
            </Button>
          </CardFooter>
        </Card>
      </div>
    </Layout>
  );
};

interface ErrorBoundaryWrapperProps {
  children: React.ReactNode;
}

export const ErrorBoundaryWrapper: React.FC<ErrorBoundaryWrapperProps> = ({
  children,
}) => {
  return (
    <ErrorBoundary FallbackComponent={FallbackRender}>{children}</ErrorBoundary>
  );
};
