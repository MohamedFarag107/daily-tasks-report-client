import { useSearchParams } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { serializedError } from "@/lib/serialized-error";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface ErrorCardProps {
  error: any;
}

export const ErrorCard: React.FC<ErrorCardProps> = ({ error }) => {
  const [_, setSearchParams] = useSearchParams();
  return (
    <div className="mt-4">
      <Card>
        <CardHeader>
          <CardTitle>Error</CardTitle>
        </CardHeader>

        <CardContent>{serializedError(error).error}</CardContent>
        <CardFooter>
          <Button
            onClick={() => {
              setSearchParams({});
            }}
          >
            Retry
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
