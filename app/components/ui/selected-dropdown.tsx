
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandSeparator,
  CommandDialog,
  CommandList
} from '~/components/ui/command'
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover"
import { cn } from "~/lib/utils"
import { Check, ChevronsUpDown } from "lucide-react"
import { Button } from "~/components/ui/button"
import * as React from "react"
import { Input } from '~/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './card'
import { Label } from '~/components/ui/label'
import { Form, useForm } from 'react-hook-form'
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '~/components/ui/form'

export interface DropdownValue {
  label: string
  value: string
}
export interface DropdownGroup {
  groupLabel: string | null
  groupId: string | null
  options: DropdownValue[]
}

const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})

export default function Index({ value, values, label, children, OnSelectValue, open, onOpen }: { value: string, values: DropdownGroup[], open: boolean, onOpen: Function, label: string, OnSelectValue: Function, children: React.ReactNode }) {

  const [open2, setopen2] = React.useState(false)
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
    },
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    // toast({
    //   title: "You submitted the following values:",
    //   description: (
    //     <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
    //       <code className="text-white">{JSON.stringify(data, null, 2)}</code>
    //     </pre>
    //   ),
    // })
  }


  return (
    <Popover open={open} onOpenChange={(e) => onOpen(e)}>
      <PopoverTrigger asChild role='combobox' >
        {children}
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder={`Search ${label}...`} />
          <CommandEmpty>No {label} found.</CommandEmpty>
          <CommandGroup>
            {values.map((datas, indexI) => (
              <CommandList key={indexI}>
                {datas.groupLabel}
                {datas.options.map((data, indexJ) => (
                  <CommandItem
                    key={indexJ}
                    value={data.value}
                    onSelect={(currentValue) => {
                      onOpen(false)
                      OnSelectValue(currentValue)
                    }}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        value === data.value ? "opacity-100" : "opacity-0"
                      )}
                    />
                    {data.label}
                  </CommandItem>
                ))}
              </CommandList>
            ))}
          </CommandGroup>
          <CommandSeparator></CommandSeparator>
          {/* <Button
            variant="outline"
            role="combobox"
            onClick={() => setopen2(true)}
            className="w-[200px] justify-between"
          >
            {value
              ? frameworks.find((framework) => framework.value === value)?.label
              : "Select framework..."}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
          <CommandDialog open={open2} onOpenChange={() => setopen2(false)}>
            <Card>
              <CardHeader>
                <CardTitle>
                  CreateTeam
                </CardTitle>
                <CardDescription>
                  Add a new team to manage products and customers.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  { }
                </Form>
              </CardContent>
            </Card>
          </CommandDialog> */}
        </Command>
      </PopoverContent>
    </Popover>
  )
}