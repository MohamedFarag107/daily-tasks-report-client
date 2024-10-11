import * as React from "react";
import { Link, useSearchParams } from "react-router-dom";
import { toast } from "sonner";
import { ArrowUpDown, Edit, MoreHorizontal, Trash } from "lucide-react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  useReactTable,
  getCoreRowModel,
} from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import { EmployeesTableLoading } from "@/components/employees-table-loading";
import { ErrorCard } from "@/components/error-card";
import { Employee } from "@/types/employee";
import { serializedError } from "@/lib/serialized-error";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { clearEmployee, setEmployee } from "@/store/employee-slice";
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
import {
  useDeleteEmployeeMutation,
  useGetEmployeesQuery,
} from "@/api/employee";

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

  const [deleteEmployee, { isLoading: isDeleteEmployeeLoading }] =
    useDeleteEmployeeMutation();

  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});
  const dispatch = useAppDispatch();

  const employees = data?.data ?? [];
  const pagination = data?.pagination;

  const currentSelectedEmployee = useAppSelector(
    (state) => state.employee.employee
  );

  const handleDeleteEmployee = async (employee: Employee) => {
    const currentEmployeeId = currentSelectedEmployee?.id;
    if (isDeleteEmployeeLoading) return;
    toast.promise(deleteEmployee(employee.id).unwrap(), {
      loading: "Deleting employee...",
      success: () => {
        if (currentEmployeeId === employee.id) {
          dispatch(clearEmployee());
        }
        return "Employee deleted successfully";
      },
      error: (error) => {
        return serializedError(error).error;
      },
    });
  };

  const handleUpdateEmployee = (employee: Employee) => {
    dispatch(setEmployee(employee));
  };

  // Handle page out of range
  React.useEffect(() => {
    if (pagination && page > pagination.totalPages) {
      searchParams.set("page", pagination.totalPages.toString());
      setSearchParams(searchParams);
    }
  }, [pagination, page, searchParams, setSearchParams]);

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
                  <Link to={`/${employee.id}`}>
                    View
                    <strong className="mx-1">{employee.name}</strong>
                    Tasks
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem
                  disabled={isDeleteEmployeeLoading}
                  onClick={() => handleUpdateEmployee(employee)}
                >
                  <Edit className="h-4 w-4 mr-2" /> Edit
                </DropdownMenuItem>

                <DropdownMenuItem
                  disabled={isDeleteEmployeeLoading}
                  onClick={() => handleDeleteEmployee(employee)}
                >
                  <Trash className="h-4 w-4 mr-2" /> Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          );
        },
      },
    ],
    [currentSelectedEmployee, isDeleteEmployeeLoading]
  );

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

  if (isLoading) return <EmployeesTableLoading />;
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
