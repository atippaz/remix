import { ReactNode } from "react";
import { Button } from "~/components/ui/button";
import { useLocation, useNavigate } from "@remix-run/react";

import { ToggleGroup, ToggleGroupItem } from "~/components/ui/toggle-group"

interface MenuRoute {
  label: string
  value: string
}
export default function DefaultLayout({ children }: DefaultLayout) {
  const navigate = useNavigate()
  const location = useLocation();
  const menuRoutes: MenuRoute[] = [
    { label: 'DashBoard', value: '/dashboard' },
    { label: 'Music', value: '/music' },
    { label: 'Mail', value: '/mail' }

  ]
  const valueMenu = menuRoutes.some(x => x.value == location.pathname) ? location.pathname : ""
  function redirectPage(url: string) {
    if (url == null || url == '') {
      return
    }
    navigate(url)
  }
  return (
    <div className="w-screen h-screen p-8">
      <div>
        <div >
          <div>
            <div className="text-center">
              <h1 className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1] md:hidden">Examples</h1>
              <p className="max-w-[750px] text-center text-lg text-muted-foreground sm:text-xl">
                Dashboard, cards, authentication. Some examples built using the components. Use this as a guide to build your own.
              </p>
            </div>
            <div className="w-full h-full py-4">
              <div className=" flex gap-4 justify-center">
                <Button>Get Started</Button>
                <Button variant="outline">Components</Button>
              </div>

            </div>
          </div>
          <div>
            <ToggleGroup type="single" value={valueMenu}
              onValueChange={(value) => {
                redirectPage(value)
              }}>
              {menuRoutes.map((e, index) => <ToggleGroupItem key={index} value={e.value} >{e.label}</ToggleGroupItem>)}
            </ToggleGroup>
          </div>
        </div>
        <div className="pt-4">
        {children}
        </div>
      </div>
    </div>
  );
}
interface DefaultLayout {
  children: ReactNode
}
