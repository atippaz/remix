import { Outlet, useLocation, useNavigate } from "@remix-run/react";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card";
import { Separator } from "~/components/ui/separator";
import { ToggleGroup, ToggleGroupItem } from "~/components/ui/toggle-group";
import { MenuRoute } from "~/interface"

export default function Forms() {
  const baseRoute = '/example/forms'
  const meneRoute: MenuRoute[] = [
    { label: 'Profile', value: '/' },
    { label: 'Account', value: '/account' },
    { label: 'Appearance', value: '/appearance' },
    { label: 'Notifications', value: '/notifications' },
    { label: 'Display', value: '/display' },

  ]
  const navigate = useNavigate()
  const location = useLocation()
  const path = location.pathname.split('/').filter((e, index) => index === 3).join('')
  const menuValue = path === '' ? '/' : `/${path}`
  return (
    <Card className="rounded-lg shadow-xl">
      <CardHeader className="mx-4 mt-4">
        <CardTitle>Settings</CardTitle>
        <CardDescription>Manage your account settings and set e-mail preferences.</CardDescription>
      </CardHeader>
      <Separator className="px-10" />
      <CardContent className="grid gap-4 grid-cols-12">
        {path}
        <ToggleGroup className="block col-span-3" type="single" value={menuValue}
          size="sm"
        >
          {meneRoute.map((e, index) => <ToggleGroupItem onClick={() => navigate(baseRoute + e.value)} className="px-3 flex justify-start w-full" key={index} value={e.value} >{e.label} </ToggleGroupItem>)}
        </ToggleGroup>
        <div className="col-span-9">
          <Outlet></Outlet>
        </div>
      </CardContent>
    </Card>
  )
}