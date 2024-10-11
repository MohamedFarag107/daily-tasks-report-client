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
import { ArrowUpDown, MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Employee } from "@/types/employee";
import { useGetEmployeesQuery } from "@/api/employee";
import { Link, useSearchParams } from "react-router-dom";
import { serializedError } from "@/lib/serialized-error";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

export function EmployeesTable() {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("search") ?? "";
  const order = searchParams.get("order") ?? "asc";
  const pageParams = Number(searchParams.get("page")) || 1;
  const page = pageParams < 1 ? 1 : pageParams;
  const { data, isLoading, isError, error } = useGetEmployeesQuery({
    name: search,
    page,
    [`order[created_at]`]: order,
  });

  const columns = React.useMemo<ColumnDef<Employee>[]>(
    () => [
      {
        accessorKey: "name",
        header: "Name",
        size: 50,
        cell: ({ row }) => (
          <div className="capitalize">{row.getValue("name")}</div>
        ),
      },
      {
        accessorKey: "created_at",
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
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                  <span className="sr-only">Open menu</span>
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuItem>
                  <Link to={`/${employee.id}`}>View {employee.name} Tasks</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          );
        },
      },
    ],
    []
  );

  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const employees = data?.data ?? [];
  const pagination = data?.pagination;

  // Handle page out of range
  React.useEffect(() => {
    if (pagination && page > pagination.totalPages) {
      setSearchParams({
        ...Object.fromEntries(searchParams),
        page: pagination.totalPages.toString(),
      });
    }
  }, [pagination, page, searchParams, setSearchParams]);

  const table = useReactTable({
    data: employees,
    columns,
    manualPagination: true,
    pageCount: pagination?.totalPages,
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

  if (isLoading) return <div>Loading...</div>;
  if (isError)
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

  return (
    <div className="w-full mt-4">
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
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
}
