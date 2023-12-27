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
const tabData = ["Overview", "Analytics", "Reports", "Notifications"]
const cardData = [
  { title: 'Total Revenue', value: '$45,231.89', des: '+20.1% from last month', icon: '' },
  { title: 'Subscriptions', value: '+2350', des: '+180.1% from last month', icon: '' }
]
export default function Index() {
  return (
    <DefaultLayout>
      <Card>
        <div className="p-4">
          <SelectedDropdown />
        </div>
        <Separator className="mb-2" />
        <div className="p-8">
          <div>Dashboard</div>
          <div>
            <Tabs defaultValue={tabData[0]}>
              <TabsList>
                {tabData.map(x => (
                  <TabsTrigger value={x} key={x}>{x}</TabsTrigger>
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
          <div className="pt-4 flex w-full">
            <div className="flex-initial w-64 h-32 ">
              <Card className="w-full h-full"></Card>

            </div>
            <div className="flex-initial w-32 h-32">
              <Card className="w-full h-full"></Card>
            </div>
          </div>
        </div>
      </Card>
    </DefaultLayout>

  );
}

