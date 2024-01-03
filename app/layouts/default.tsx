import { ReactNode, useEffect } from "react"
import { Button } from "~/components/ui/button"
import { useLocation, useNavigate } from "@remix-run/react";

import { ToggleGroup, ToggleGroupItem } from "~/components/ui/toggle-group"

interface MenuRoute {
  label: string
  value: string
}
export default function DefaultLayout({ children }: DefaultLayout) {
  const navigate = useNavigate()
  const location = useLocation()
  const menuRoutes: MenuRoute[] = [
    { label: 'Mail', value: '/mail' },
    { label: 'DashBoard', value: '/dashboard' },
    { label: 'Tasks', value: '/tasks' },
    { label: 'Forms', value: '/forms' },
    { label: 'Music', value: '/music' },

  ]
  const valueMenu = menuRoutes.some(x => x.value == location.pathname) ? location.pathname : ""
  function redirectPage(url: string) {
    if (url == null || url == '') {
      return
    }
    navigate('/example' + url)
  }


  useEffect(() => {
    if (valueMenu == '') {
      redirectPage(valueMenu)
    }
  }, [valueMenu])

  return (
    <div className="w-full h-full p-12">
      <div>
        <div >
          <div>
            <div className="text-center">
              <p className="text-center text-3xl font-bold ">Check out some examples</p>
              <p className="text-center text-lg text-muted-foreground">
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
          <div >
            <ToggleGroup type="single" value={valueMenu}
              size="sm"
              className="flex justify-start"
              onValueChange={(value) => {
                redirectPage(value)
              }}>
              {menuRoutes.map((e, index) => <ToggleGroupItem className="rounded-full px-3" key={index} value={e.value} >{e.label}</ToggleGroupItem>)}
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
