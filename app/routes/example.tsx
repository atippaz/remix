import { Outlet } from "@remix-run/react";
import DefaultLayout from '~/layouts/default'
export default function Example() {
  return (
    <DefaultLayout>
      <Outlet></Outlet>
    </DefaultLayout>
  );
}
