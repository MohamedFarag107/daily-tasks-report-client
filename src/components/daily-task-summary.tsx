import * as React from "react";
import { Label, Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { MAX_HOURS } from "@/constants";
import {
  addMinutes,
  format,
  formatDuration,
  intervalToDuration,
  startOfDay,
} from "date-fns";
import { DailyTaskSummary as TaskSummary } from "@/types/task";

interface DailyTaskSummaryProps {
  data?: TaskSummary;
  date: Date;
}
export const DailyTaskSummary: React.FC<DailyTaskSummaryProps> = ({
  data: { remaining_minutes, total_minutes } = {},
  date,
}) => {
  const chartData = [
    {
      dataKey: "total_minutes",
      minutes: total_minutes || 0,
      fill: "hsl(var(--chart-1))",
    },
    {
      dataKey: "remaining_minutes",
      minutes: remaining_minutes || 0,
      fill: "hsl(var(--chart-5))",
    },
  ];

  const chartConfig = {
    total_minutes: {
      label: "Total Assigned",
      color: "hsl(var(--chart-1))",
    },
    remaining_minutes: {
      label: "Remaining",
      color: "hsl(var(--chart-5))",
    },
  } satisfies ChartConfig;

  const nameMapper: Record<string, string> = {
    total_minutes: "Total Assigned",
    remaining_minutes: "Remaining",
  };

  return (
    <div>
      <Card className="flex flex-col">
        <CardHeader className="items-center pb-0">
          <CardTitle>
            Daily Task Summary for {format(new Date(date), "MMMM dd, yyyy")}
          </CardTitle>
          <CardDescription>
            {total_minutes ? (
              <span>
                {formatDuration(
                  intervalToDuration({
                    start: startOfDay(new Date()),
                    end: addMinutes(startOfDay(new Date()), total_minutes),
                  })
                )}{" "}
                of {MAX_HOURS} hours assigned
              </span>
            ) : (
              <span>No tasks assigned</span>
            )}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-1 pb-0">
          <ChartContainer
            config={chartConfig}
            className="mx-auto aspect-square max-h-[250px]"
          >
            <PieChart>
              <ChartTooltip
                cursor={false}
                content={
                  <ChartTooltipContent
                    hideLabel
                    formatter={(value, name) =>
                      `${nameMapper[name]} ${formatDuration(
                        intervalToDuration({
                          start: startOfDay(new Date()),
                          end: addMinutes(
                            startOfDay(new Date()),
                            Number(value)
                          ),
                        })
                      )}`
                    }
                  />
                }
              />
              <Pie
                data={chartData}
                dataKey="minutes"
                nameKey="dataKey"
                innerRadius={60}
                strokeWidth={5}
              >
                <Label
                  content={({ viewBox }) => {
                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                      return (
                        <text
                          x={viewBox.cx}
                          y={viewBox.cy}
                          textAnchor="middle"
                          dominantBaseline="middle"
                        >
                          <tspan
                            x={viewBox.cx}
                            y={viewBox.cy}
                            className="fill-foreground text-3xl font-bold"
                          >
                            {MAX_HOURS.toLocaleString()}
                          </tspan>
                          <tspan
                            x={viewBox.cx}
                            y={(viewBox.cy || 0) + 24}
                            className="fill-muted-foreground"
                          >
                            Hours
                          </tspan>
                        </text>
                      );
                    }
                  }}
                />
              </Pie>
              <ChartLegend content={<ChartLegendContent nameKey="dataKey" />} />
            </PieChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
};
