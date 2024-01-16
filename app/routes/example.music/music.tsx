import { PlusCircle } from 'lucide-react'
import { ReactNode, useEffect } from 'react'
import {
    ContextMenu,
    ContextMenuCheckboxItem,
    ContextMenuContent,
    ContextMenuItem,
    ContextMenuLabel,
    ContextMenuRadioGroup,
    ContextMenuRadioItem,
    ContextMenuSeparator,
    ContextMenuShortcut,
    ContextMenuSub,
    ContextMenuSubContent,
    ContextMenuSubTrigger,
    ContextMenuTrigger,
} from '~/components/ui/context-menu'
import { ScrollArea, ScrollBar } from '~/components/ui/scroll-area'
import { Separator } from '~/components/ui/separator'
interface playlist {
    label: string
    value: string
    icon: ReactNode
}
export default function MusicComponect({ playlist }: { playlist: playlist[] }) {
    const suggestionMusic = [
        {
            title: 'React Rendezvous',
            des: 'Ethan Byte',
            img: 'https://ui.shadcn.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1611348586804-61bf6c080437%3Fw%3D300%26dpr%3D2%26q%3D80&w=640&q=75',
        },
        {
            title: 'Async Awakenings',
            des: 'Nina Netcode',
            img: 'https://ui.shadcn.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1468817814611-b7edf94b5d60%3Fw%3D300%26dpr%3D2%26q%3D80&w=256&q=75',
        },
        {
            title: 'The Art of Reusability',
            des: 'Lena Logic',
            img: 'https://ui.shadcn.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1528143358888-6d3c7f67bd5d%3Fw%3D300%26dpr%3D2%26q%3D80&w=256&q=75',
        },
        {
            title: 'Stateful Symphony',
            des: 'Beth Binary',
            img: 'https://ui.shadcn.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1490300472339-79e4adc6be4a%3Fw%3D300%26dpr%3D2%26q%3D80&w=256&q=75',
        },
    ]
    const forYouMusic = [
        {
            title: 'Thinking Components',
            des: 'Lena Logic',
            img: 'https://ui.shadcn.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1615247001958-f4bc92fa6a4a%3Fw%3D300%26dpr%3D2%26q%3D80&w=256&q=75',
        },
        {
            title: 'Functional Fury',
            des: 'Beth Binary',
            img: 'https://ui.shadcn.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1513745405825-efaf9a49315f%3Fw%3D300%26dpr%3D2%26q%3D80&w=256&q=75',
        },
        {
            title: 'React Rendezvous',
            des: 'Ethan Byte',
            img: 'https://ui.shadcn.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1611348586804-61bf6c080437%3Fw%3D300%26dpr%3D2%26q%3D80&w=640&q=75',
        },
        {
            title: 'Stateful Symphony',
            des: 'Beth Binary',
            img: 'https://ui.shadcn.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1446185250204-f94591f7d702%3Fw%3D300%26dpr%3D2%26q%3D80&w=256&q=75',
        },
        {
            title: 'Async Awakenings',
            des: 'Nina Netcode',
            img: 'https://ui.shadcn.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1468817814611-b7edf94b5d60%3Fw%3D300%26dpr%3D2%26q%3D80&w=256&q=75',
        },
        {
            title: 'Stateful Symphony',
            des: 'Beth Binary',
            img: 'https://ui.shadcn.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1490300472339-79e4adc6be4a%3Fw%3D300%26dpr%3D2%26q%3D80&w=256&q=75',
        },
    ]
    return (
        <>
            <div>
                <div className="flex items-center justify-between mb-4">
                    <div className="space-y-1">
                        <h2 className="text-2xl font-semibold tracking-tight">
                            Listen Now
                        </h2>
                        <p className="text-sm text-muted-foreground">
                            Top picks for you. Updated daily.
                        </p>
                    </div>
                </div>
                <Separator></Separator>

                <div className="mt-4">
                    <div>
                        <ScrollArea className="w-full whitespace-nowrap">
                            <div className=" flex w-max space-x-4 py-4">
                                {suggestionMusic.map((x, index) => {
                                    return (
                                        <figure
                                            key={index}
                                            className="shrink-0"
                                        >
                                            <ContextMenu>
                                                <ContextMenuTrigger className="">
                                                    <div className="overflow-hidden rounded-md w-[250px]">
                                                        <img
                                                            src={x.img}
                                                            alt={`Photo by ${x.title}`}
                                                            className="h-auto w-auto object-cover transition-all hover:scale-105 aspect-[3/4]"
                                                        />
                                                    </div>
                                                </ContextMenuTrigger>
                                                <ContextMenuContent className="w-36">
                                                    <ContextMenuItem>
                                                        Add To Library
                                                    </ContextMenuItem>
                                                    <ContextMenuSub>
                                                        <ContextMenuSubTrigger>
                                                            Add To Playlist
                                                        </ContextMenuSubTrigger>
                                                        <ContextMenuSubContent className="w-48">
                                                            <ContextMenuItem className="gap-2">
                                                                <PlusCircle className="w-[15px]"></PlusCircle>
                                                                <span>
                                                                    New Playlist
                                                                </span>
                                                            </ContextMenuItem>
                                                            <ContextMenuSeparator />

                                                            {playlist.map(
                                                                (x) => {
                                                                    return (
                                                                        <ContextMenuItem className="gap-2">
                                                                            <span>
                                                                                {
                                                                                    x.icon
                                                                                }
                                                                            </span>
                                                                            <span>
                                                                                {
                                                                                    x.label
                                                                                }
                                                                            </span>
                                                                        </ContextMenuItem>
                                                                    )
                                                                }
                                                            )}
                                                        </ContextMenuSubContent>
                                                    </ContextMenuSub>
                                                    <ContextMenuSeparator />
                                                    <ContextMenuItem>
                                                        Play Next
                                                    </ContextMenuItem>
                                                    <ContextMenuItem>
                                                        Play Later
                                                    </ContextMenuItem>
                                                    <ContextMenuItem>
                                                        Create Station
                                                    </ContextMenuItem>
                                                    <ContextMenuSeparator />
                                                    <ContextMenuItem>
                                                        Like
                                                    </ContextMenuItem>
                                                    <ContextMenuItem>
                                                        Share
                                                    </ContextMenuItem>
                                                </ContextMenuContent>
                                            </ContextMenu>

                                            <div className="mt-2 text-sm">
                                                <h3 className="font-medium leading-none">
                                                    {x.title}
                                                </h3>
                                                <p className="text-xs text-muted-foreground">
                                                    {x.des}
                                                </p>
                                            </div>
                                        </figure>
                                    )
                                })}
                            </div>
                            <ScrollBar orientation="horizontal" />
                        </ScrollArea>
                    </div>
                </div>
            </div>
            <div className="mt-6">
                <div className="flex items-center justify-between mb-4">
                    <div className="space-y-1">
                        <h2 className="text-2xl font-semibold tracking-tight">
                            Made for You
                        </h2>
                        <p className="text-sm text-muted-foreground">
                            Your personal playlists. Updated daily.
                        </p>
                    </div>
                </div>
                <Separator></Separator>
                <div className="mt-4">
                    <div>
                        <ScrollArea className="w-full whitespace-nowrap">
                            <div className=" flex w-max space-x-4 py-4">
                                {forYouMusic.map((x, index) => {
                                    return (
                                        <figure
                                            className="shrink-0"
                                            key={index}
                                        >
                                            <ContextMenu>
                                                <ContextMenuTrigger className="">
                                                    <div className="overflow-hidden rounded-md w-[150px]">
                                                        <img
                                                            src={x.img}
                                                            alt={`Photo by ${x.title}`}
                                                            className="h-auto w-auto object-cover transition-all hover:scale-105 aspect-square"
                                                        />
                                                    </div>
                                                </ContextMenuTrigger>
                                                <ContextMenuContent className="w-36">
                                                    <ContextMenuItem>
                                                        Add To Library
                                                    </ContextMenuItem>
                                                    <ContextMenuSub>
                                                        <ContextMenuSubTrigger>
                                                            Add To Playlist
                                                        </ContextMenuSubTrigger>
                                                        <ContextMenuSubContent className="w-48">
                                                            <ContextMenuItem className="gap-2">
                                                                <PlusCircle className="w-[15px]"></PlusCircle>
                                                                <span>
                                                                    New Playlist
                                                                </span>
                                                            </ContextMenuItem>
                                                            <ContextMenuSeparator />

                                                            {playlist.map(
                                                                (x) => {
                                                                    return (
                                                                        <ContextMenuItem className="gap-2">
                                                                            <span>
                                                                                {
                                                                                    x.icon
                                                                                }
                                                                            </span>
                                                                            <span>
                                                                                {
                                                                                    x.label
                                                                                }
                                                                            </span>
                                                                        </ContextMenuItem>
                                                                    )
                                                                }
                                                            )}
                                                        </ContextMenuSubContent>
                                                    </ContextMenuSub>
                                                    <ContextMenuSeparator />
                                                    <ContextMenuItem>
                                                        Play Next
                                                    </ContextMenuItem>
                                                    <ContextMenuItem>
                                                        Play Later
                                                    </ContextMenuItem>
                                                    <ContextMenuItem>
                                                        Create Station
                                                    </ContextMenuItem>
                                                    <ContextMenuSeparator />
                                                    <ContextMenuItem>
                                                        Like
                                                    </ContextMenuItem>
                                                    <ContextMenuItem>
                                                        Share
                                                    </ContextMenuItem>
                                                </ContextMenuContent>
                                            </ContextMenu>
                                            <div className="mt-2 text-sm">
                                                <h3 className="font-medium leading-none">
                                                    {x.title}
                                                </h3>
                                                <p className="text-xs text-muted-foreground">
                                                    {x.des}
                                                </p>
                                            </div>
                                        </figure>
                                    )
                                })}
                            </div>
                            <ScrollBar orientation="horizontal" />
                        </ScrollArea>
                    </div>
                </div>
            </div>
        </>
    )
}
