
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

interface DropdownValue {
  label: string
  value: string
}
interface DropdownGroup {
  groupName: string
  values: DropdownValue[]
}
const dataDropdown: DropdownGroup[] = [
  {
    groupName: "Personal Account",
    values: [
      { label: 'Alicia Koch', value: '1' },
    ]
  },
  {
    groupName: "Teams",
    values: [
      { label: 'Acme Inc.', value: '2' },
      { label: 'Monsters Inc.', value: '3' },
    ]
  }
]
const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})

export default function Index() {


  const [open, setOpen] = React.useState(false)
  const [open2, setopen2] = React.useState(false)
  const [value, setValue] = React.useState(dataDropdown[0].values[0].value)
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
  const flatData = {
    get value(): DropdownValue[] {
      const state: DropdownValue[] = []
      dataDropdown.forEach(x => x.values.forEach(m => {
        state.push({
          value: m.value,
          label: m.label
        })
      }))
      return state
    }
  };
  function findValue(value: string) {
    const valueFinder = flatData.value.find(x => x.value == value)
    return valueFinder == null ? "Select framework..." : valueFinder.label
  }
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {findValue(value)}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search framework..." />
          <CommandEmpty>No framework found.</CommandEmpty>
          <CommandGroup>
            {dataDropdown.map((datas, indexI) => (
              <CommandList key={indexI}>
                {datas.groupName}
                {datas.values.map((data, indexJ) => (
                  <CommandItem
                    key={indexJ}
                    value={data.value}
                    onSelect={(currentValue) => {
                      setValue(currentValue === value ? "" : currentValue)
                      setOpen(false)
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