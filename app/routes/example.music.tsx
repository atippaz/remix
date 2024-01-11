import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Separator } from "~/components/ui/separator";

export default function Mail() {
  return <Card className="rounded-lg shadow-xl">
    <div className="mx-6">
      s
    </div>
    <Separator />
    <CardContent className="grid grid-cols-12">
      <div className="col-span-3">a</div>
      <div className="col-span-9"><div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
        <img
          src="https://tecdn.b-cdn.net/img/new/fluid/city/113.webp"
          className="max-w-xs transition duration-100 ease-in-out hover:scale-[1.10]"
          alt="Louvre" />
      </div></div>
    </CardContent>
  </Card >
}