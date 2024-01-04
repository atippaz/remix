import type { MetaFunction } from "@remix-run/node";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, useReactTable,
} from "@tanstack/react-table"
import { ArrowUpDown, Check, ChevronRightIcon, ChevronDown, CheckCircle2, Circle, AlarmClockCheck, HelpCircle, ChevronUp, ChevronsUpDown, MoreHorizontal, Dot, Settings } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "~/components/ui/popover";
import { Command, CommandGroup, CommandItem, CommandShortcut } from "~/components/ui/command";
import { cn } from "~/lib/utils";
import { Task, TaskPriority, TaskStatus, TaskType } from "./interface";
import { useState } from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuSeparator, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from "~/components/ui/dropdown-menu";
import { Checkbox } from "~/components/ui/checkbox";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from "~/components/ui/navigation-menu";
export const meta: MetaFunction = () => {
  return [
    { title: "New das App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};
function iconStatus(status: TaskStatus) {
  if (status == "In Progress") {
    return <HelpCircle />
  }
  if (status == "Backlog") {
    return <AlarmClockCheck />
  }
  if (status == "Todo") {
    return <Circle />
  }
  if (status == "Done") {
    return <CheckCircle2 />
  }
}
const taskDataTable: Task[] = [
]
const pageSize = [
  {
    value: "10",
    label: "10",
  },
  {
    value: "20",
    label: "20",
  },
  {
    value: "30",
    label: "30",
  },
  {
    value: "40",
    label: "40",
  },
  {
    value: "50",
    label: "50",
  },
]
export default function Tasks() {
  const status: TaskStatus[] = ["Todo", "In Progress", "Done", "Backlog"]
  const priority: TaskPriority[] = ["High", "Low", "Medium"]
  const catagory: TaskType[] = ["Bug", "Documentation", "Feature"]
  while (taskDataTable.length < 100) {
    const task: Task = {
      catagory: catagory[Math.round(Math.random() * 2)],
      id: `TASK-878${taskDataTable.length}`,
      title: "You can't compress the program without quantifying the open-source SSD piaksdkas" + Math.random() * 431,
      status: status[Math.round(Math.random() * 3)],
      priority: priority[Math.round(Math.random() * 2)]
    }
    taskDataTable.push(task)
  }

  console.log(taskDataTable);

  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>(
    []
  )
  const lebels = ["Dot", "Future", "Documentation"]
  const [openDropdown, setOpenDropdown] = useState(false)
  const [pageSizeSelected, setpageSizeSelected] = useState("10")
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = useState({})
  const columns: ColumnDef<Task>[] = [
    {
      id: "select",
      header: ({ table }) => (
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(val) => {
            table.toggleAllPageRowsSelected(!!val)
          }}
          aria-label="Select all"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => {
            row.toggleSelected(!!value)
          }}
          aria-label="Select row"
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "id",
      header: "Task",
      cell: ({ row }) => (
        <div className="capitalize">{row.getValue("id")}</div>
      ),
    },
    {
      accessorKey: "title",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            TItle
            <div>
              <ChevronUp className="ml-2 h-3 w-3" />
              <ChevronDown className="ml-2 h-3 w-3 -mt-1" />
            </div>
          </Button>
        )
      },
      cell: ({ row }) => {
        return (
          <div className="p-4 flex gap-2 capitalize font-bold">
            <span className="border-solid border rounded-md border-slate-200 px-2">
              {`${row.getValue("catagory")}`}
            </span>
            <span>
              {`${row.getValue("title")}`}
            </span>
          </div>
        )
      }
    },
    {
      accessorKey: "status",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            className="flex justify-start"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Status
            <div>
              <ChevronUp className="ml-2 h-3 w-3" />
              <ChevronDown className="ml-2 h-3 w-3 -mt-1" />
            </div>
          </Button>
        )
      },
      cell: ({ row }) => (
        <div className="p-4 capitalize">
          {iconStatus(row.getValue("status"))}
          {row.getValue("status")}
        </div>
      ),
    },
    {
      accessorKey: "priority",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Priority
            <div>
              <ChevronUp className="ml-2 h-3 w-3" />
              <ChevronDown className="ml-2 h-3 w-3 -mt-1" />
            </div>
          </Button>
        )
      },
      cell: ({ row }) => (
        <div className="p-4 capitalize">{row.getValue("priority")}</div>
      ),
    },
    {
      accessorKey: "catagory",
      header: '',
      cell: ''
    },
    {
      id: "actions",
      enableHiding: false,
      cell: ({ row }) => {
        const task = row.original
        return (
          <DropdownMenu >
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem>
                Edit
              </DropdownMenuItem>
              <DropdownMenuItem>
                Make a copy
              </DropdownMenuItem>
              <DropdownMenuItem>
                Favorite
              </DropdownMenuItem>
              <DropdownMenuSeparator />

              <DropdownMenuSub>
                <DropdownMenuSubTrigger className="w-full">
                  Lebels
                </DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent
                    className="DropdownMenuSubContent"
                    sideOffset={2}
                    alignOffset={-5}
                  >
                    {lebels.map(x => {
                      return (
                        <DropdownMenuItem key={x} className="DropdownMenuItem">
                          <DropdownMenuTrigger className="grid grid-cols-12  w-full">
                            <div className="col-span-2 w-full flex justify-center">    {x !== task.catagory || <Dot />}</div>
                            <div className="col-span-10 w-full flex justify-start">    {x}</div>
                          </DropdownMenuTrigger>
                        </DropdownMenuItem>
                      )
                    })}

                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>


              <DropdownMenuSeparator />
              <DropdownMenuItem>
                Delete
                <span className="ml-auto text-xs tracking-widest opacity-60">⌘⌫</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu >
        )
      },
    },
  ]
  const table = useReactTable({
    data: taskDataTable,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  })

  return (
    <Card className="p-2">
      <CardHeader>
        <CardTitle>Welcome back!</CardTitle>
        <CardDescription>{"Here's a list of your tasks for this month!"}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between">
          <div className="flex gap-2">
            <Input placeholder="Filter tasks..."></Input>
            <Button className="border-dashed" variant="outline">Status</Button>
            <Button className="border-dashed" variant="outline">Priority</Button>
          </div>
          <div>
            <Button variant="outline">view</Button>
          </div>
        </div>
        <div className="rounded-md border mt-4">
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
                    )
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
        <div className="flex justify-between items-center px-4 pt-4">
          <div>
            {(Object.keys(table.options.state.rowSelection || {}).length)}  of {taskDataTable.length} row(s) selected.

          </div>
          <div className="flex">
            <div>
              Rows per page<Popover open={openDropdown} onOpenChange={setOpenDropdown}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={openDropdown}
                    className="w-[200px] justify-between"
                  >
                    {pageSizeSelected
                      ? pageSize.find((page) => page.value === pageSizeSelected)?.label
                      : pageSize[0].value}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0">
                  <Command>
                    <CommandGroup>
                      {pageSize.map((page) => (
                        <CommandItem
                          key={page.value}
                          value={page.value}
                          onSelect={(currentValue) => {
                            setpageSizeSelected(currentValue === pageSizeSelected ? "" : currentValue)
                            setOpenDropdown(false)
                            table.setPageSize(parseInt(currentValue))
                          }}
                        >
                          <Check
                            className={cn(
                              "mr-2 h-4 w-4",
                              pageSizeSelected === page.value ? "opacity-100" : "opacity-0"
                            )}
                          />
                          {page.label}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </Command>
                </PopoverContent>
              </Popover>
              Page {(table.options.state.pagination?.pageIndex || 0) + 1}  of {table.getPageCount()}
            </div>
            <div className="flex items-center justify-end gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => table.setPageIndex(0)}
                disabled={!table.getCanPreviousPage()}
              >
                {'<<'}
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
              >
                {'<'}
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => table.nextPage()}
                disabled={!table.getCanNextPage()}
              >
                {'>'}
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                disabled={!table.getCanNextPage()}
              >
                {'>>'}
              </Button>
            </div>
          </div>


        </div>
      </CardContent>
    </Card >
  );
}
