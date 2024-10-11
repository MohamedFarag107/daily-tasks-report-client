import { useSearchParams } from "react-router-dom";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { serializedError } from "@/lib/serialized-error";

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
