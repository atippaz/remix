import type { MetaFunction } from "@remix-run/node"
import DefaultLayout from '~/layouts/default'
import { Separator } from "~/components/ui/separator"
import SelectedDropdown from "~/components/ui/selected-dropdown"
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
import { BarChart, Bar } from 'recharts';
const chartData = [{
  name: "Page A",
  data: 3000,

}]
const subMenu = ["Overview", "Customers", "Products", "Settings"]
const tabData = ["Overview", "Analytics", "Reports", "Notifications"]
const cardData = [
  { title: 'Total Revenue', value: '$45,231.89', des: '+20.1% from last month', icon: '' },
  { title: 'Subscriptions', value: '+2350', des: '+180.1% from last month', icon: '' },
  { title: 'Sales', value: '+12,234', des: '+19% from last month', icon: '' },
  { title: 'Active Now', value: '+573', des: '+201 since last hour', icon: '' }

]
export default function Index() {
  return (
    <DefaultLayout>
      <Card>
        <div className="p-4 flex ">
          <SelectedDropdown />
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
                <div>slald</div>
                <div>

                  <BarChart id="data" width={150} height={40} data={chartData}>
                    <Bar id="data" dataKey="data" fill="#000000" />
                  </BarChart>
                </div>
              </Card>

            </div>
            <div className="col-span-5 h-32">
              <Card className="w-full h-full"></Card>
            </div>
          </div>
        </div>
      </Card>
    </DefaultLayout>

  );
}

