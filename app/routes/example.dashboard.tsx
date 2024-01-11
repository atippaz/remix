import type { MetaFunction } from "@remix-run/node"
import { Separator } from "~/components/ui/separator"
import SelectedDropdown, { DropdownValue, type DropdownGroup } from "~/components/ui/selected-dropdown"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "~/components/ui/tabs"
export const meta: MetaFunction = () => {
  return [
    { title: "New das App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};
import { BarChart, Bar, YAxis, XAxis, ResponsiveContainer, Line } from 'recharts';
import { Button } from "~/components/ui/button"
import { ChevronsUpDown } from "lucide-react"
import { useEffect, useState } from "react"
let chartData = [{
  name: "Jan",
}, {
  name: "Feb",

}, {
  name: "Mar",

}, {
  name: "Apr",

}, {
  name: "May",

}, {
  name: "Jun",

}, {
  name: "Jul",

}, {
  name: "Aug",

}, {
  name: "Sep",

}, {
  name: "Oct",

}, {
  name: "Nov",

}, {
  name: "Dec",

}]
const subMenu = ["Overview", "Customers", "Products", "Settings"]
const tabData = ["Overview", "Analytics", "Reports", "Notifications"]
const cardData = [
  { title: 'Total Revenue', value: '$45,231.89', des: '+20.1% from last month', icon: '' },
  { title: 'Subscriptions', value: '+2350', des: '+180.1% from last month', icon: '' },
  { title: 'Sales', value: '+12,234', des: '+19% from last month', icon: '' },
  { title: 'Active Now', value: '+573', des: '+201 since last hour', icon: '' }

]
const recentSalesData = [
  {
    picture: '',
    name: 'Olivia Martin',
    email: 'olivia.martin@email.com',
    value: '+$1,999.00'
  },
  {
    picture: '',
    name: 'Jackson Lee',
    email: 'jackson.lee@email.com',
    value: '+$39.00'
  },
  {
    picture: '',
    name: 'Isabella Nguyen',
    email: 'isabella.nguyen@email.com',
    value: '+$299.00'
  },
  {
    picture: '',
    name: 'William Kim',
    email: 'will@email.com',
    value: '+$99.00'
  },
  {
    picture: '',
    name: 'Sofia Davis',
    email: 'sofia.davis@email.com',
    value: '+$39.00'
  }
]
const dataDropdown: DropdownGroup[] = [
  {
    groupId: '1',
    groupLabel: "Personal Account",
    options: [
      { label: 'Alicia Koch', value: 'Alicia Koch' },
    ]
  },
  {
    groupId: '1',
    groupLabel: "Teams",
    options: [
      { label: 'Acme Inc.', value: 'Acme Inc.' },
      { label: 'Monsters Inc.', value: 'Monsters Inc.' },
    ]
  }
]
const flatData = {
  get value(): DropdownValue[] {
    const state: DropdownValue[] = []
    dataDropdown.forEach(x => x.options.forEach(m => {
      state.push({
        value: m.value,
        label: m.label
      })
    }))
    return state
  }
};

function findValue(value: string) {

  const valueFinder = flatData.value.find(x => x.value.toLowerCase() == value.toLowerCase())
  return valueFinder == null ? 'Place Select . . .' : valueFinder.label
}
export default function Dashboard() {
  const [open, setOpen] = useState(false)
  const [valueDropdown, setValueDropdown] = useState(dataDropdown[0].options[0].value)
  useEffect(() => {
    chartData = chartData.map(x => { return { name: x.name, data: Math.floor(Math.random() * 3000) + 3000 } })
  }, [])
  return (
    <div>
      <Card className="shadow-xl rounded-lg">
        <div className="p-4 flex ">
          <SelectedDropdown open={open} value={valueDropdown} onOpen={(e: boolean) => setOpen(e)} OnSelectValue={(e: string) => setValueDropdown(e)} values={dataDropdown} label="team" >
            <Button
              variant="outline"
              aria-expanded={open}
              className="w-[200px] justify-between"
            >
              {findValue(valueDropdown)}
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button></SelectedDropdown>
          <div className="flex align-center">
            {subMenu.map(x => (<span className="mx-2" key={x}>{x}</span>))}
          </div>
        </div>
        <Separator className="mb-2" />
        <div className="p-8">
          <div>Dashboard</div>
          <div>
            <Tabs defaultValue={tabData[0]}>
              <TabsList >
                {tabData.map((x, index) => (
                  <TabsTrigger disabled={index != 0} value={x} key={x}>{x}</TabsTrigger>
                ))}

              </TabsList>
            </Tabs >
          </div>
          <div className="pt-4 grid w-full grid-cols-4 gap-4">
            {cardData.map(x => (
              <Card key={x.title}>
                <CardHeader>{x.title}</CardHeader>
                <CardContent>{x.value}</CardContent>
                <CardDescription>{x.des}</CardDescription>
              </Card>
            ))}
          </div>
          <div className="pt-4 grid grid-cols-12 gap-4 w-full h[1000px]">
            <div className="col-span-7">
              <Card className="w-full h-full">
                <div>Overview</div>
                <div>
                  {/* <ResponsiveContainer aspect={1} width="100%" }> */}

                  <BarChart height={400} width={700} id="data" data={chartData}>
                    <YAxis axisLine={false} tickLine={false} tickFormatter={(value) => `$${value}`} ></YAxis>
                    <XAxis dataKey="name" axisLine={false} tickLine={false}></XAxis>
                    <Bar id="data" dataKey="data" radius={[4, 4, 0, 0]} fill="#000000" />
                    {/* <Line
                      type="monotone"
                      dataKey="name"
                      stroke="#8884d8"
                      activeDot={{ r: 8 }}
                    /> */}
                  </BarChart>
                  {/* </ResponsiveContainer> */}
                </div>
              </Card>

            </div>
            <div className="col-span-5 h-32 w-full h-full">
              <Card className="w-full h-full">
                <CardHeader><CardTitle>
                  Recent Sales
                </CardTitle><CardDescription>
                    You made 265 sales this month.</CardDescription></CardHeader>
                <CardContent >
                  {recentSalesData.map(e => {
                    return (<div key={e.name} className="flex justify-between content-center ">
                      <div>
                        <div>
                          {e.name}
                        </div>
                        <div>{
                          e.email
                        }</div>
                      </div>
                      <div className="font-bold">
                        {e.value}
                      </div>
                    </div>)
                  })}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </Card>
    </div>

  );
}

