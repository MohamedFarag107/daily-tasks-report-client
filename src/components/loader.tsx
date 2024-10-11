import { cn } from "@/lib/utils";
import { Spinner } from "@/components/ui/spinner";

interface LoaderProps {
  fullScreen?: boolean;
}

export const Loader: React.FC<LoaderProps> = ({ fullScreen }) => {
  return (
    <div
      className={cn(
        "flex items-center justify-center",
        fullScreen ? "w-screen h-screen" : "w-full h-full"
      )}
    >
      <Spinner size="large" />
    </div>
  );
};
