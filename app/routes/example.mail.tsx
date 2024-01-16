import { ReactNode, useState } from 'react'
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
    return (
        <>
            <ResizablePanelGroup
                direction="horizontal"
                className="w-full h-full shadow-xl rounded-lg border"
            >
                <ResizablePanel minSize={5} maxSize={20} defaultSize={20}>
                    <CardBox className="">
                        <span className={`font-semibold ${headerStyle}`}>
                            One
                        </span>
                        <span className="font-semibold">One</span>
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
