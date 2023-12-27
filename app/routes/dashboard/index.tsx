import type { MetaFunction } from "@remix-run/node";
import DefaultLayout from '~/layouts/default'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card"
export const meta: MetaFunction = () => {
  return [
    { title: "New das App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <DefaultLayout>
      <Card>
    <CardContent>
asdas
    </CardContent>
    
      </Card>
    </DefaultLayout>

  );
}
