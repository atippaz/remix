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
import SelectedDropdown, { DropdownValue, type DropdownGroup } from "~/components/ui/selected-dropdown"
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
import { useEffect, useState } from "react";
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuSeparator, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from "~/components/ui/dropdown-menu";
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
    return <HelpCircle className="text-slate-600 w-[15px]" />
  }
  if (status == "Backlog") {
    return <AlarmClockCheck className="text-slate-600 w-[15px]" />
  }
  if (status == "Todo") {
    return <Circle className="text-slate-600 w-[15px]" />
  }
  if (status == "Done") {
    return <CheckCircle2 className="text-slate-600 w-[15px]" />
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
  const status: TaskStatus[] = ["Todo", "In Progress", "Done", "Backlog", 'Canceled']
  const priority: TaskPriority[] = ["High", "Low", "Medium"]
  const catagory: TaskType[] = ["Bug", "Documentation", "Feature"]
  while (taskDataTable.length < 100) {
    const task: Task = {
      catagory: catagory[Math.round(Math.random() * 2)],
      id: `TASK-878${taskDataTable.length}`,
      title: "You can't compress the program without quantifying the open-source SSD piaksdkas" + Math.random() * 12324 * 4386709876541,
      status: status[Math.round(Math.random() * 3)],
      priority: priority[Math.round(Math.random() * 2)]
    }
    taskDataTable.push(task)
  }


  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>(
    []
  )
  const lebels = ['Bug', 'Feature', 'Documentation']
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
      header: () => <p className="pr-12">Task</p>,
      cell: ({ row }) => (
        <div className="">{row.getValue("id")}</div>
      ),
      enableHiding: false,
    },
    {
      accessorKey: "title",
      header: ({ column }) => {
        return (
          <Button
            className="ml-2"
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Title
            <div>
              <ChevronUp className="ml-2 h-3 w-3" />
              <ChevronDown className="ml-2 h-3 w-3 -mt-1" />
            </div>
          </Button>
        )
      },
      cell: ({ row }) => {
        return (
          <div className="px-4 flex w-[70%] gap-2 capitalize font-bold">
            <div className="border-solid border h-fit rounded-md border-slate-200 px-2 ml-2">
              {`${row.getValue("catagory")}`}
            </div>
            <p className="line-clamp-1">
              {`${row.getValue("title")}`}
            </p>
          </div>
        )
      },
      enableHiding: true,
    },
    {
      accessorKey: "status",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            className="flex w-[130px] justify-start"
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
        <div className="mr-4 flex gap-2 capitalize">
          {iconStatus(row.getValue("status"))}
          {row.getValue("status")}
        </div>
      ),
      enableHiding: true,
      enableColumnFilter: true,
      enableGrouping: true
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
        <div className="mx-4 capitalize">{row.getValue("priority")}</div>
      ),
      enableHiding: true,
    },
    {
      accessorKey: "catagory",
      header: '',
      cell: '',
      enableHiding: false,
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
  const [textSearch, setTextSearch] = useState('')
  const [openStatus, setOpenStatus] = useState(false)
  const [statusFilterValue, setStatusFilterValue] = useState('')
  const dataStatusDropdown: DropdownGroup[] = [{
    groupId: null, groupLabel: null, options: status.map(x => {
      return {
        label: `${x} (${table.getFilteredRowModel().rows.filter(f => f.getValue('status') == x).length})`,
        value: x
      }
    })
  }]
  return (
      <Card className="p-2">
          <CardHeader>
              <CardTitle>
                  <p className="text-2xl font-bold tracking-tight">
                      Welcome back!
                  </p>
              </CardTitle>
              <CardDescription>
                  <p className="text-muted-foreground font-[600]">
                      {"Here's a list of your tasks for this month!"}
                  </p>
              </CardDescription>
          </CardHeader>
          <CardContent>
              <div className="flex justify-between">
                  <div className="flex gap-2">
                      <Input
                          placeholder="Filter tasks..."
                          value={
                              (table
                                  .getColumn('title')
                                  ?.getFilterValue() as string) ?? ''
                          }
                          onChange={(event) =>
                              table
                                  .getColumn('title')
                                  ?.setFilterValue(event.target.value)
                          }
                      ></Input>
                      <SelectedDropdown
                          open={openStatus}
                          value={statusFilterValue}
                          onOpen={(e: boolean) => setOpenStatus(e)}
                          OnSelectValue={(e: string) => {
                              setStatusFilterValue(e)
                              table
                                  .getColumn('status')
                                  ?.setFilterValue(statusFilterValue)
                          }}
                          values={dataStatusDropdown}
                          label="team"
                      >
                          <Button className="border-dashed" variant="outline">
                              Status
                          </Button>
                      </SelectedDropdown>
                      <Button className="border-dashed" variant="outline">
                          Priority
                      </Button>
                  </div>
                  <div>
                      <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                              <Button variant="outline">view</Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent className="w-56">
                              <DropdownMenuLabel>
                                  Toggle columns
                              </DropdownMenuLabel>
                              <DropdownMenuSeparator />
                              {table
                                  .getAllColumns()
                                  .filter((column) => column.getCanHide())
                                  .map((e, index) => {
                                      return (
                                          <DropdownMenuCheckboxItem
                                              checked={e.getIsVisible()}
                                              onCheckedChange={(value) =>
                                                  e.toggleVisibility(!!value)
                                              }
                                              key={index}
                                          >
                                              {e.id.charAt(0).toUpperCase() +
                                                  e.id.slice(1)}
                                          </DropdownMenuCheckboxItem>
                                      )
                                  })}
                          </DropdownMenuContent>
                      </DropdownMenu>
                  </div>
              </div>
              <div className="rounded-md border mt-4">
                  <Table>
                      <TableHeader>
                          {table.getHeaderGroups().map((headerGroup, index) => (
                              <TableRow key={index}>
                                  {headerGroup.headers.map((header, index) => {
                                      return (
                                          <TableHead key={index}>
                                              {header.isPlaceholder
                                                  ? null
                                                  : flexRender(
                                                        header.column.columnDef
                                                            .header,
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
                              table.getRowModel().rows.map((row, index) => (
                                  <TableRow
                                      key={index}
                                      data-state={
                                          row.getIsSelected() && 'selected'
                                      }
                                  >
                                      {row
                                          .getVisibleCells()
                                          .map((cell, index) => (
                                              <TableCell key={index}>
                                                  {flexRender(
                                                      cell.column.columnDef
                                                          .cell,
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
                      {table.getFilteredSelectedRowModel().rows.length} of{' '}
                      {table.getFilteredRowModel().rows.length} row(s) selected.
                  </div>
                  <div className="flex">
                      <div>
                          Rows per page
                          <Popover
                              open={openDropdown}
                              onOpenChange={setOpenDropdown}
                          >
                              <PopoverTrigger asChild>
                                  <Button
                                      variant="outline"
                                      role="combobox"
                                      aria-expanded={openDropdown}
                                      className="w-[200px] justify-between"
                                  >
                                      {pageSizeSelected
                                          ? pageSize.find(
                                                (page) =>
                                                    page.value ===
                                                    pageSizeSelected
                                            )?.label
                                          : pageSize[0].value}
                                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                  </Button>
                              </PopoverTrigger>
                              <PopoverContent className="w-[200px] p-0">
                                  <Command>
                                      <CommandGroup>
                                          {pageSize.map((page, index) => (
                                              <CommandItem
                                                  key={index}
                                                  value={page.value}
                                                  onSelect={(currentValue) => {
                                                      setpageSizeSelected(
                                                          currentValue ===
                                                              pageSizeSelected
                                                              ? ''
                                                              : currentValue
                                                      )
                                                      setOpenDropdown(false)
                                                      table.setPageSize(
                                                          parseInt(currentValue)
                                                      )
                                                  }}
                                              >
                                                  <Check
                                                      className={cn(
                                                          'mr-2 h-4 w-4',
                                                          pageSizeSelected ===
                                                              page.value
                                                              ? 'opacity-100'
                                                              : 'opacity-0'
                                                      )}
                                                  />
                                                  {page.label}
                                              </CommandItem>
                                          ))}
                                      </CommandGroup>
                                  </Command>
                              </PopoverContent>
                          </Popover>
                          Page{' '}
                          {(table.options.state.pagination?.pageIndex || 0) + 1}{' '}
                          of {table.getPageCount()}
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
                              onClick={() =>
                                  table.setPageIndex(table.getPageCount() - 1)
                              }
                              disabled={!table.getCanNextPage()}
                          >
                              {'>>'}
                          </Button>
                      </div>
                  </div>
              </div>
          </CardContent>
      </Card>
  )
}
