import type { MetaFunction } from "@remix-run/node";
import DefaultLayout from '~/layouts/default'

export const meta: MetaFunction = () => {
  return [
    { title: "Nsew Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <DefaultLayout>s</DefaultLayout>
  );
}
