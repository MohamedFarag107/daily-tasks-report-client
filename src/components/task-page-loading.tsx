import { Pie, PieChart } from "recharts";

import { TaskTableLoading } from "@/components/task-table-loading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";

const chartData = [
  {
    dataKey: "total_minutes",
    minutes: 2 * 60,
    fill: "hsl(var(--primary))",
  },
  {
    dataKey: "remaining_minutes",
    minutes: 6 * 60,
    fill: "hsl(var(--muted))",
  },
];

const chartConfig = {
  total_minutes: {
    label: "Total Assigned",
    color: "hsl(var(--primary))",
  },
  remaining_minutes: {
    label: "Remaining",
    color: "hsl(var(--muted))",
  },
} satisfies ChartConfig;

type CartData = (typeof chartData)[number];

interface ChartSkeletonProps {
  chartConfig: ChartConfig;
  chartData: CartData[];
}
export const ChartSkeleton: React.FC<ChartSkeletonProps> = ({
  chartConfig,
  chartData,
}) => (
  <Card className="flex flex-col">
    <CardHeader className="items-center pb-0">
      <CardTitle className="h-6 w-1/2 flex justify-center">
        <Skeleton className="h-6 w-1/2" />
      </CardTitle>
      <div className="h-6 w-1/2 flex justify-center">
        <Skeleton className="h-4 w-full" />
      </div>
    </CardHeader>
    <CardContent className="flex-1 pb-0">
      <ChartContainer
        config={chartConfig}
        className="mx-auto aspect-square max-h-[250px]"
      >
        <PieChart>
          <Pie
            data={chartData}
            dataKey="minutes"
            nameKey="dataKey"
            innerRadius={60}
            strokeWidth={5}
          ></Pie>
          <ChartLegend content={<ChartLegendContent nameKey="dataKey" />} />
        </PieChart>
      </ChartContainer>
    </CardContent>
  </Card>
);

export const CalendarSkeleton = () => (
  <Card className="flex flex-col justify-center items-center p-4">
    <div className="flex justify-evenly items-center w-full mb-3">
      <Skeleton className="h-6 w-6" />
      <Skeleton className="h-6 w-12" />
      <Skeleton className="h-6 w-6" />
    </div>
    <ul className="grid grid-cols-7 gap-7">
      {Array.from({ length: 7 }).map((_, i) => (
        <li key={i} className="flex flex-col gap-3">
          {Array.from({ length: 5 }).map((_, j) => (
            <Skeleton key={`${i}-${j}`} className="w-8 h-8" />
          ))}
        </li>
      ))}
    </ul>
  </Card>
);

export const TaskFormSkeleton = () => (
  <div className="space-y-8 mt-4">
    <div className="space-y-4">
      <Skeleton className="h-6 w-28" />
      <Skeleton className="h-6 w-20" />
      <Skeleton className="h-20 w-full" />
      <Skeleton className="h-6 w-36" />
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {Array.from({ length: 2 }).map((_, i) => (
        <div className="flex flex-col gap-4 justify-center w-fit" key={i}>
          <Skeleton className="h-6 w-28" />
          <div className="flex items-center gap-4">
            <Skeleton className="h-8 w-12" />
            <Skeleton className="h-8 w-12" />
            <Skeleton className="h-8 w-12" />
          </div>
          <Skeleton className="h-6 w-28" />
        </div>
      ))}
    </div>
    <Skeleton className="h-10 w-20" />
  </div>
);

export const EmployeeCardSkeleton = () => (
  <Card>
    <CardHeader>
      <Skeleton className="h-6 w-1/2" />
    </CardHeader>
    <CardContent>
      <Skeleton className="h-4 w-full mb-2" />
      <Skeleton className="h-4 w-full" />
    </CardContent>
  </Card>
);

export const TaskPageLoading = () => {
  return (
    <div className="space-y-4 my-4">
      <EmployeeCardSkeleton />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <ChartSkeleton chartConfig={chartConfig} chartData={chartData} />
        <CalendarSkeleton />
      </div>
      <TaskTableLoading />
      <TaskFormSkeleton />
    </div>
  );
};
