import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card'
import { Separator } from '~/components/ui/separator'
import {
    PlayCircle,
    LayoutGrid,
    Radio,
    ListMusic,
    Music2,
    User,
    Mic2,
    Library,
    PlusCircle,
} from 'lucide-react'
import { ScrollArea } from '~/components/ui/scroll-area'
import MusicComponect from '~/routes/example.music/music'
import PodcastComponect from '~/routes/example.music/podcast'
import MenuBar from './menu'
import { Button } from '~/components/ui/button'
import { ToggleGroup, ToggleGroupItem } from '~/components/ui/toggle-group'
import { Tabs, TabsList, TabsTrigger } from '~/components/ui/tabs'
import { useState } from 'react'
export default function Mail() {
    const [selectTab, setSelectTab] = useState('music')
    const value = '/'
 

    const menuList = [
        {
            title: 'Discover',
            menus: [
                {
                    label: 'Listen Now',
                    value: '/',
                    icon: <PlayCircle className="w-[15px]"></PlayCircle>,
                },
                {
                    label: 'Browse',
                    value: '',
                    icon: <LayoutGrid className="w-[15px]"></LayoutGrid>,
                },
                {
                    label: 'Radio',
                    value: '',
                    icon: <Radio className="w-[15px]"></Radio>,
                },
            ],
        },
        {
            title: 'Library',
            menus: [
                {
                    label: 'Playlists',
                    value: '',
                    icon: <ListMusic className="w-[15px]"></ListMusic>,
                },
                {
                    label: 'Songs',
                    value: '',
                    icon: <Music2 className="w-[15px]"></Music2>,
                },
                {
                    label: 'Made for You',
                    value: '',
                    icon: <User className="w-[15px]"></User>,
                },
                {
                    label: 'Artists',
                    value: '',
                    icon: <Mic2 className="w-[15px]"></Mic2>,
                },
                {
                    label: 'Albums',
                    value: '',
                    icon: <Library className="w-[15px]"></Library>,
                },
            ],
        },
        {
            title: 'Playlists',
            menus: [
                {
                    label: 'Recently Added',
                    value: '',
                    icon: <ListMusic className="w-[15px]"></ListMusic>,
                },
                {
                    label: 'Recently Played',
                    value: '',
                    icon: <ListMusic className="w-[15px]"></ListMusic>,
                },
                {
                    label: 'Top Songs',
                    value: '',
                    icon: <ListMusic className="w-[15px]"></ListMusic>,
                },
                {
                    label: 'Top Albums',
                    value: '',
                    icon: <ListMusic className="w-[15px]"></ListMusic>,
                },
                {
                    label: 'Top Artists',
                    value: '',
                    icon: <ListMusic className="w-[15px]"></ListMusic>,
                },
                {
                    label: 'Logic DisCography',
                    value: '',
                    icon: <ListMusic className="w-[15px]"></ListMusic>,
                },
                {
                    label: 'Bedtime Beats',
                    value: '',
                    icon: <ListMusic className="w-[15px]"></ListMusic>,
                },
                {
                    label: 'Feeling Happy',
                    value: '',
                    icon: <ListMusic className="w-[15px]"></ListMusic>,
                },
                {
                    label: 'I miss Y2K Pop',
                    value: '',
                    icon: <ListMusic className="w-[15px]"></ListMusic>,
                },
                {
                    label: 'Runtober',
                    value: '',
                    icon: <ListMusic className="w-[15px]"></ListMusic>,
                },
                {
                    label: 'Mellow',
                    value: '',
                    icon: <ListMusic className="w-[15px]"></ListMusic>,
                },
                {
                    label: 'Essentials',
                    value: '',
                    icon: <ListMusic className="w-[15px]"></ListMusic>,
                },
            ],
        },
    ]
    const tabData = [
        {
            label: 'Music',
            value: 'music',
            component: (
                <MusicComponect playlist={menuList[2].menus}></MusicComponect>
            ),
        },
        {
            label: 'Podcasts',
            value: 'podcasts',
            component: <PodcastComponect></PodcastComponect>,
        },
        {
            label: 'Live',
            value: '',
            component: null,
        },
    ]
    return (
        <Card className="rounded-lg shadow-xl ">
            <div className="px-4">
                <MenuBar></MenuBar>
            </div>
            <Separator />
            <CardContent className="grid grid-cols-12 px-4 pb-0">
                <div className="col-span-2 border-r h-full pb-12">
                    <div className="my-6 mr-3">
                        {menuList.map((x, index) => {
                            return (
                                <div className="mb-6" key={index}>
                                    <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
                                        {x.title}
                                    </h2>
                                    {index > 1 || (
                                        <ToggleGroup
                                            type="single"
                                            value={value}
                                            size="sm"
                                            className="block"
                                        >
                                            {x.menus.map((m, indexs) => {
                                                return (
                                                    <ToggleGroupItem
                                                        className="w-full py-4"
                                                        value={m.value}
                                                        key={indexs}
                                                    >
                                                        <div className="w-full flex gap-2 justify-items-start px-2">
                                                            <div>{m.icon}</div>
                                                            <div>{m.label}</div>
                                                        </div>
                                                    </ToggleGroupItem>
                                                )
                                            })}
                                        </ToggleGroup>
                                    )}
                                    {index < 2 || (
                                        <ScrollArea className="h-[200px] w-full ">
                                            <ToggleGroup
                                                type="single"
                                                value={value}
                                                size="sm"
                                                className="block"
                                            >
                                                {x.menus.map((m, indexs) => {
                                                    return (
                                                        <ToggleGroupItem
                                                            className="w-full "
                                                            key={indexs}
                                                            value={m.value}
                                                        >
                                                            <div className=" w-full flex gap-2 justify-items-start px-2">
                                                                <div>
                                                                    {m.icon}
                                                                </div>
                                                                <div>
                                                                    {m.label}
                                                                </div>
                                                            </div>
                                                        </ToggleGroupItem>
                                                    )
                                                })}
                                            </ToggleGroup>
                                        </ScrollArea>
                                    )}
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="col-span-10">
                    <div className="py-4 px-6">
                        <div className="flex justify-between">
                            <Tabs defaultValue={tabData[0].value}>
                                <TabsList>
                                    {tabData.map((x, _) => (
                                        <TabsTrigger
                                            onClick={(e) =>
                                                setSelectTab(x.value)
                                            }
                                            disabled={x.component == null}
                                            value={x.value}
                                            key={_}
                                        >
                                            {x.label}
                                        </TabsTrigger>
                                    ))}
                                </TabsList>
                            </Tabs>
                            <Button className="flex gap-2">
                                <PlusCircle className="w-[15px]"></PlusCircle>
                                <div>Add Podcast</div>
                            </Button>
                        </div>
                        <div className="mt-6 mx-2">
                            {
                                tabData.find((x) => x.value == selectTab)
                                    ?.component
                            }
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
