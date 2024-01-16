import { IceCream } from 'lucide-react'
import { ReactNode, useState } from 'react'
import { Button } from '~/components/ui/button'
import { Card } from '~/components/ui/card'
import { Input } from '~/components/ui/input'
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from '~/components/ui/resizable'
import { ScrollArea, ScrollBar } from '~/components/ui/scroll-area'
import { Separator } from '~/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '~/components/ui/tabs'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '~/components/ui/tooltip'
const CardBox = ({
    children,
    className,
}: {
    children: ReactNode[]
    className?: string
}) => {
    return (
        <div className={className}>
            <div className="flex items-center p-2 ">{children[0]}</div>
            <Separator></Separator>
            <div>{children[1]}</div>
        </div>
    )
}
interface Tag {
    label: string
    style: 'outline' | 'dark' | 'normal'
}
interface Mail {
    mailId: string
    isRead: Boolean
    title: string
    formUser: string
    content: string
    tag: Tag[]
    sendTime: string
}
export default function Mail() {
    const headerStyle = 'h-[30px]'
    const [valueTabSelect, setValueTabSelect] = useState('all_mail')
    const [selectMail, setSelectMail] = useState<string>('0')
    const Mails: Mail[] = []
    const [collapse, setCollapse] = useState(false)
    const menuMail = [
        { label: 'Inbox', icon: '', count: '128', isDark: true },
        { label: 'Drafts', icon: '', count: '9', isDark: false },
        { label: '', icon: '', count: '', isDark: false },
        { label: '', icon: '', count: '23', isDark: false },
        { label: '', icon: '', count: '', isDark: false },
        { label: '', icon: '', count: '', isDark: false },
    ]
    const menuMore = [
        { label: '', icon: '', count: '128', isDark: false },
        { label: '', icon: '', count: '128', isDark: false },
    ]
    return (
        <>
            <ResizablePanelGroup
                direction="horizontal"
                className="w-full h-full shadow-xl rounded-lg border"
            >
                <ResizablePanel
                    onResize={(e) => {
                        if (e < 12 && !collapse) {
                            setCollapse(true)
                        } else if (e >= 12 && collapse) {
                            setCollapse(false)
                        }
                    }}
                    minSize={6}
                    maxSize={20}
                    defaultSize={20}
                >
                    <CardBox className="">
                        <div className={`font-semibold ${headerStyle}`}>
                            One
                        </div>
                        <div className="p-2 w-full h-full">
                            <TooltipProvider>
                                <Tooltip delayDuration={50}>
                                    <TooltipTrigger asChild>
                                        <Button className="w-full px-2">
                                            <IceCream className="w-[15px]"></IceCream>
                                            {!collapse && 'xx'}
                                        </Button>
                                    </TooltipTrigger>
                                    <TooltipContent side="right">
                                        <p>Add to library</p>
                                    </TooltipContent>
                                </Tooltip>
                                <Tooltip delayDuration={50}>
                                    <TooltipTrigger asChild>
                                        <Button className="w-full px-2">
                                            <IceCream className="w-[15px]"></IceCream>
                                            {!collapse && 'xx'}
                                        </Button>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>Add to library</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </div>
                    </CardBox>
                </ResizablePanel>
                <ResizableHandle withHandle />

                <ResizablePanel minSize={30} defaultSize={35}>
                    <CardBox>
                        <span className={`flex justify-between ${headerStyle}`}>
                            <h1 className="text-xl font-bold">Inbox</h1>
                            <div>
                                <Tabs defaultValue={valueTabSelect}>
                                    <TabsList className="grid w-full grid-cols-2">
                                        <TabsTrigger
                                            value="all_mail"
                                            onClick={(e) =>
                                                setValueTabSelect('all_mail')
                                            }
                                        >
                                            All Mail
                                        </TabsTrigger>
                                        <TabsTrigger
                                            value="unread"
                                            onClick={(e) =>
                                                setValueTabSelect('unread')
                                            }
                                        >
                                            Unread
                                        </TabsTrigger>
                                    </TabsList>
                                </Tabs>
                            </div>
                        </span>
                        <div className="p-4 block">
                            <Input placeholder="search"></Input>
                            <ScrollArea className="h-[700px]">
                                {valueTabSelect == 'all_mail' ? (
                                    <>
                                        mail
                                        <br />a
                                        <br />a
                                        <br />a
                                        <br />a
                                        <br />a
                                        <br />a
                                        <br />a
                                        <br />a
                                        <br />a
                                        <br />a
                                        <br />a
                                        <br />a
                                        <br />a
                                        <br />a
                                        <br />a
                                        <br />a
                                        <br />a
                                        <br />a
                                        <br />a
                                        <br />a
                                        <br />a
                                        <br />a
                                        <br />a
                                        <br />a
                                        <br />a
                                        <br />a
                                        <br />a
                                        <br />a
                                        <br />a
                                        <br />a
                                        <br />a
                                        <br />a
                                        <br />a
                                        <br />a
                                        <br />a
                                        <br />
                                        <a href=""></a>
                                    </>
                                ) : (
                                    <>read</>
                                )}
                                <ScrollBar orientation="vertical"></ScrollBar>
                            </ScrollArea>
                        </div>
                    </CardBox>
                </ResizablePanel>
                <ResizableHandle withHandle />

                <ResizablePanel minSize={10} defaultSize={45}>
                    <CardBox>
                        <span className={`font-semibold ${headerStyle}`}>
                            <h1 className="text-xl font-bold">Inbox</h1>
                        </span>

                        <span className="font-semibold">Three</span>
                    </CardBox>
                </ResizablePanel>
            </ResizablePanelGroup>
        </>
    )
}
