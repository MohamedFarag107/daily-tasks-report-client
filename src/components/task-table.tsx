import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  useReactTable,
  getCoreRowModel,
} from "@tanstack/react-table";
import { ArrowUpDown, Edit, Trash } from "lucide-react";
import { format, formatDuration, intervalToDuration } from "date-fns";
import { useSearchParams } from "react-router-dom";
import { toast } from "sonner";

import { useAppDispatch, useAppSelector } from "@/store/store";
import { clearTask, setTask } from "@/store/task-slice";
import { useDeleteTaskMutation, useGetTasksQuery } from "@/api/task";
import { serializedError } from "@/lib/serialized-error";
import { formateTaskDate } from "@/lib/date";
import { Task } from "@/types/task";
import { Button } from "@/components/ui/button";
import { TaskTableLoading } from "@/components/task-table-loading";
import { ErrorCard } from "@/components/error-card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface TasksTableProps {
  employeeId: number;
  date: Date;
}

export const TasksTable: React.FC<TasksTableProps> = ({ date, employeeId }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("search") ?? "";
  const order = searchParams.get("order") ?? "asc";
  const pageParams = Number(searchParams.get("page")) || 1;
  const page = pageParams < 1 ? 1 : pageParams;
  const { data, isLoading, isError, error } = useGetTasksQuery({
    description: search,
    page,
    [`order[created_at]`]: order,
    ["filter[date]"]: formateTaskDate(date),
    ["filter[employeeId]"]: employeeId,
  });

  const dispatch = useAppDispatch();
  const [deleteTask, { isLoading: isDeleteTaskLoading }] =
    useDeleteTaskMutation();

  const handleUpdateTask = (task: Task) => {
    dispatch(setTask(task));
  };

  const currentSelectedTask = useAppSelector((state) => state.task.task);

  const handleDeleteTask = (task: Task) => {
    toast.promise(deleteTask(task.id).unwrap(), {
      loading: "Deleting task...",
      success: () => {
        if (currentSelectedTask?.id === task.id) {
          dispatch(clearTask());
        }
        return "Task deleted successfully";
      },
      error: (error) => serializedError(error).error,
    });
  };

  const columns = React.useMemo<ColumnDef<Task>[]>(
    () => [
      {
        accessorKey: "description",
        header: "Description",
        size: 500,
        minSize: 500,
        cell: ({ row }) => (
          <div className="capitalize text-sm line-clamp-1">
            {row.getValue("description")}
          </div>
        ),
      },
      {
        accessorKey: "from",
        header: "From",
        size: 100,
        minSize: 100,
        cell: ({ row }) => (
          <div>{format(new Date(row.getValue("from")), "hh:mm a")}</div>
        ),
      },
      {
        accessorKey: "to",
        header: "To",
        size: 100,
        minSize: 100,
        cell: ({ row }) => (
          <div>{format(new Date(row.getValue("to")), "hh:mm a")}</div>
        ),
      },
      {
        id: "duration",
        header: "Duration",
        size: 100,
        minSize: 100,
        cell: ({ row }) => (
          <div>
            {formatDuration(
              intervalToDuration({
                start: new Date(row.getValue("from")),
                end: new Date(row.getValue("to")),
              })
            )}
          </div>
        ),
      },
      {
        accessorKey: "created_at",
        size: 200,
        minSize: 200,
        header: ({}) => {
          return (
            <div
              className="flex items-center cursor-pointer"
              onClick={() => {
                const order = searchParams.get("order") ?? "asc";
                searchParams.set("order", order === "asc" ? "desc" : "asc");
                setSearchParams(searchParams);
              }}
            >
              Created At
              <ArrowUpDown className="ml-2 h-4 w-4" />
            </div>
          );
        },
        cell: ({ row }) => (
          <div>{new Date(row.getValue("created_at")).toLocaleDateString()}</div>
        ),
        enableSorting: true,
      },
      {
        id: "actions",
        enableHiding: false,
        cell: ({ row }) => {
          const employee = row.original;

          return (
            <div className="flex items-center space-x-2">
              <Button
                size={"icon"}
                variant={"outline"}
                disabled={isDeleteTaskLoading}
                onClick={() => handleUpdateTask(employee)}
              >
                <Edit className="h-4 w-4" />
              </Button>
              <Button
                size={"icon"}
                variant={"destructive"}
                disabled={isDeleteTaskLoading}
                onClick={() => handleDeleteTask(employee)}
              >
                <Trash className="h-4 w-4" />
              </Button>
            </div>
          );
        },
      },
    ],
    [currentSelectedTask, isDeleteTaskLoading]
  );

  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const tasks = data?.data ?? [];
  const pagination = data?.pagination;

  // Handle page out of range
  React.useEffect(() => {
    if (pagination && page > pagination.totalPages) {
      searchParams.set("page", pagination.totalPages.toString());
      setSearchParams(searchParams);
    }
  }, [pagination, page, searchParams, setSearchParams]);

  const table = useReactTable({
    data: tasks,
    columns,
    manualPagination: true,
    pageCount: pagination?.totalPages,
    defaultColumn: {
      size: 200,
    },
    state: {
      pagination: {
        pageIndex: page - 1,
        pageSize: pagination?.limit || 10,
      },
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
    onPaginationChange: (updater) => {
      const newPage =
        typeof updater === "function"
          ? updater({
              pageIndex: page - 1,
              pageSize: pagination?.limit || 10,
            }).pageIndex + 1
          : updater.pageIndex + 1;
      setSearchParams({
        ...Object.fromEntries(searchParams),
        page: newPage.toString(),
      });
    },
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
  });

  if (isLoading) return <TaskTableLoading />;
  if (isError) return <ErrorCard error={error} />;

  return (
    <div className="w-full mt-4">
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead
                      key={header.id}
                      style={{
                        width: header.getSize(),
                      }}
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};
