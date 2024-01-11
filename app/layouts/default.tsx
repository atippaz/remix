import { ReactNode, useEffect } from "react"
import { Button } from "~/components/ui/button"
import { useLocation, useNavigate } from "@remix-run/react";

import { ToggleGroup, ToggleGroupItem } from "~/components/ui/toggle-group"
import { MenuRoute } from "~/interface"

export default function DefaultLayout({ children }: DefaultLayout) {
  const navigate = useNavigate()
  const location = useLocation()
  const menuRoutes: MenuRoute[] = [
    { label: 'Mail', value: '/example/mail' },
    { label: 'DashBoard', value: '/example/dashboard' },
    { label: 'Tasks', value: '/example/tasks' },
    { label: 'Forms', value: '/example/forms' },
    { label: 'Music', value: '/example/music' },

  ]
  const path = location.pathname.split('/').filter((e, index) => index <= 2)
  const valueMenu = path.join('/')

  function redirectPage(url: string) {
    if (url == null || url == '' || url == '/example') {
      navigate(menuRoutes[0].value)
      return
    }
    navigate(url)
  }


  useEffect(() => {
    if (valueMenu == '' || valueMenu == '' || valueMenu == '/example') {
      redirectPage(menuRoutes[0].value)
      return
    }
    navigate(valueMenu)

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
            >
              {menuRoutes.map((e, index) => <ToggleGroupItem onClick={() => redirectPage(e.value)} className="rounded-full px-3" key={index} value={e.value} >{e.label}</ToggleGroupItem>)}
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
