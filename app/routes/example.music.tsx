import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Separator } from "~/components/ui/separator";

export default function Mail() {
  const menuList = [
    {
      title: 'Discover',
      menus: [
        { label: 'Listen Now', value: '', icon: 'fa-play-circle' },
        { label: 'Browse', value: '', icon: '' },
        { label: 'Radio', value: '', icon: '' },
      ]
    },
    {
      title: 'Library',
      menus: [
        { label: 'Playlists', value: '', icon: '' },
        { label: 'Songs', value: '', icon: '' },
        { label: 'Made for You', value: '', icon: '' },
        { label: 'Artists', value: '', icon: '' },
        { label: 'Albums', value: '', icon: '' },
      ]
    }
    , {
      title: 'Playlists',
      menus: [
        { label: 'Recently Added', value: '', icon: '' },
        { label: 'Recently Played', value: '', icon: '' },
        { label: 'Top Songs', value: '', icon: '' },
        { label: 'Top Albums', value: '', icon: '' },
        { label: 'Top Artists', value: '', icon: '' },
        { label: 'Logic DisCography', value: '', icon: '' },
        { label: 'Bedtime Beats', value: '', icon: '' },
        { label: 'Feeling Happy', value: '', icon: '' },
        { label: 'I miss Y2K Pop', value: '', icon: '' },
        { label: 'Runtober', value: '', icon: '' },
        { label: 'Mellow', value: '', icon: '' },
        { label: 'Essentials', value: '', icon: '' },
      ]
    }
  ]
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