import { Outlet } from "@remix-run/react";
import DefaultLayout from '~/layouts/default'
export default function Example() {
  return (
      <>
          <div className="backdrop-blur-lg fixed top-0 px-4 w-full h-[60px] border-b border-gray-200 z-50">
              <div className="inline-block  align-middle h-full">
                  align-center
              </div>
          </div>
          <div className="p-12"></div>
          <DefaultLayout>
              <Outlet></Outlet>
          </DefaultLayout>
      </>
  )
}
