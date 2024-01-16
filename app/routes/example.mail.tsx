import {
    Archive,
    ArchiveX,
    File,
    IceCream,
    Inbox,
    Info,
    MessageSquare,
    Send,
    ShoppingCart,
    Trash2,
    User2,
} from 'lucide-react'
import { ReactNode, useEffect, useState } from 'react'
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
import { ToggleGroup, ToggleGroupItem } from '~/components/ui/toggle-group'
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
    sendTime: Date
    email: string
}
function SelectMail({ item }: { item: Mail }) {
    return (
        <span className="font-semibold">
            <div>{item?.mailId}</div>
            <Separator></Separator>
            <div>{item?.content}</div>
            {`${item?.isRead}`}
        </span>
    )
}
export default function Mail() {
    const paragraphs = [
        `Hi, let's have a meeting tomorrow to discuss the project. I've been reviewing the project details and have some ideas I'd like to share. It's crucial that we align on our next steps to ensure the project's success.

    Please come prepared with any questions or insights you may have. Looking forward to our meeting!
    
    Best regards, William`,
        `Any plans for the weekend? I was thinking of going hiking in the nearby mountains. It's been a while since we had some outdoor fun.

        If you're interested, let me know, and we can plan the details. It'll be a great way to unwind and enjoy nature.
        
        Looking forward to your response!
        
        Best, Bob`,
        `I have a question about the budget for the upcoming project. It seems like there's a discrepancy in the allocation of resources.

        I've reviewed the budget report and identified a few areas where we might be able to optimize our spending without compromising the project's quality.
        
        I've attached a detailed analysis for your reference. Let's discuss this further in our next meeting.
        
        Thanks, Emily
        `,
        `I've completed the registration for the conference next month. The event promises to be a great networking opportunity, and I'm looking forward to attending the various sessions and connecting with industry experts.

        I've also attached the conference schedule for your reference.
        
        If there are any specific topics or sessions you'd like me to explore, please let me know. It's an exciting event, and I'll make the most of it.
        
        Best regards, James
        `,
        `I'd like your feedback on the latest project deliverables. We've made significant progress, and I value your input to ensure we're on the right track.

        I've attached the deliverables for your review, and I'm particularly interested in any areas where you think we can further enhance the quality or efficiency.
        
        Your feedback is invaluable, and I appreciate your time and expertise. Let's work together to make this project a success.
        
        Regards, Daniel
        `,
        `The product launch is on track. I'll provide an update during our call. We've made substantial progress in the development and marketing of our new product.

        I'm excited to share the latest updates with you during our upcoming call. It's crucial that we coordinate our efforts to ensure a successful launch. Please come prepared with any questions or insights you may have.
        
        Let's make this product launch a resounding success!
        
        Best regards, William
        `,
    ]
    const users = [
        {
            userName: 'William Smith',
            email: ' williamsmith@example.com',
        },
        {
            userName: 'Alice Smith',
            email: 'alicesmith@example.com',
        },
        {
            userName: 'Bob Johnson',
            email: 'bobjohnson@example.com',
        },
    ]
    const topics = [
        `Meeting Tomorrow`,
        `Re: Project Update`,
        `New Project Idea`,
        `Vacation Plans`,
        `Re: Conference Registration`,
        `Re: Question about Budget`,
    ]
    const headerStyle = 'h-[35px]'
    const iconStyle = 'h-[15px] flex justify-center'
    const [isAllMail, setIsAllMail] = useState(true)
    const [selectMail, setSelectMail] = useState<string>('0')
    const [mails, setMails] = useState<Mail[]>([])
    const [collapse, setCollapse] = useState(false)
    const menuMail = [
        {
            label: 'Inbox',
            icon: <Inbox className={iconStyle}></Inbox>,
            count: '128',
            isDark: true,
        },
        {
            label: 'Drafts',
            icon: <File className={iconStyle}></File>,
            count: '9',
            isDark: false,
        },
        {
            label: 'Sent',
            icon: <Send className={iconStyle}></Send>,
            count: '',
            isDark: false,
        },
        {
            label: 'Junk',
            icon: <ArchiveX className={iconStyle} />,
            count: '23',
            isDark: false,
        },
        {
            label: 'Trash',
            icon: <Trash2 className={iconStyle}></Trash2>,
            count: '',
            isDark: false,
        },
        {
            label: 'Archive',
            icon: <Archive className={iconStyle} />,
            count: '',
            isDark: false,
        },
    ]
    const menuMore = [
        {
            label: 'Social',
            icon: <User2 className={iconStyle}></User2>,
            count: '972',
            isDark: false,
        },
        {
            label: 'Updates',
            icon: <Info className={iconStyle}></Info>,
            count: '342',
            isDark: false,
        },
        {
            label: 'Forums',
            icon: <MessageSquare className={iconStyle}></MessageSquare>,
            count: '128',
            isDark: false,
        },
        {
            label: 'Shopping',
            icon: <ShoppingCart className={iconStyle} />,
            count: '8',
            isDark: false,
        },
        {
            label: 'Promotions',
            icon: <Archive className={iconStyle}></Archive>,
            count: '21',
            isDark: false,
        },
    ]

    useEffect(() => {
        let i = 0
        while (i <= 30) {
            let randomIndex = Math.floor(Math.random() * topics.length)
            const topic = topics[randomIndex]
            randomIndex = Math.floor(Math.random() * users.length)
            const user = users[randomIndex]
            randomIndex = Math.floor(Math.random() * paragraphs.length)
            const paragraph = paragraphs[randomIndex]
            randomIndex = Math.random()
            const mailObj = {
                mailId: `${i}`,
                title: topic,
                content: paragraph,
                formUser: user.userName,
                isRead: randomIndex > 0.08,
                sendTime: new Date(),
                tag: [],
                email: user.email,
            }
            setMails((prev) => [...prev, mailObj])
            i++
        }
    }, [])

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
                    minSize={4}
                    maxSize={20}
                    defaultSize={20}
                >
                    <CardBox className="">
                        <div className={`font-semibold ${headerStyle}`}>
                            One
                        </div>
                        <div className=" w-full h-full">
                            <div className="p-3 ">
                                <TooltipProvider>
                                    {menuMail.map((x) => {
                                        return (
                                            <Tooltip delayDuration={50}>
                                                <TooltipTrigger
                                                    asChild
                                                    className="px-2"
                                                >
                                                    <Button
                                                        className="w-full px-2  flex items-start justify-between"
                                                        variant={`${
                                                            x.isDark
                                                                ? 'default'
                                                                : 'ghost'
                                                        }`}
                                                    >
                                                        <div className="flex gap-2">
                                                            {x.icon}
                                                            {!collapse &&
                                                                x.label}
                                                        </div>
                                                        <div>
                                                            {!collapse &&
                                                                x.count}
                                                        </div>
                                                    </Button>
                                                </TooltipTrigger>
                                                {collapse && (
                                                    <TooltipContent side="right">
                                                        <p>
                                                            {x.label} {x.count}
                                                        </p>
                                                    </TooltipContent>
                                                )}
                                            </Tooltip>
                                        )
                                    })}
                                </TooltipProvider>
                            </div>

                            <Separator></Separator>
                            <div className="p-3">
                                <TooltipProvider>
                                    {menuMore.map((x) => {
                                        return (
                                            <Tooltip delayDuration={50}>
                                                <TooltipTrigger asChild>
                                                    <Button
                                                        className="w-full px-2  flex items-start justify-between"
                                                        variant={`${
                                                            x.isDark
                                                                ? 'default'
                                                                : 'ghost'
                                                        }`}
                                                    >
                                                        <div className="flex gap-2">
                                                            {x.icon}
                                                            {!collapse &&
                                                                x.label}
                                                        </div>
                                                        <div>
                                                            {!collapse &&
                                                                x.count}
                                                        </div>
                                                    </Button>
                                                </TooltipTrigger>
                                                {collapse && (
                                                    <TooltipContent side="right">
                                                        <p>
                                                            {x.label} {x.count}
                                                        </p>
                                                    </TooltipContent>
                                                )}
                                            </Tooltip>
                                        )
                                    })}
                                </TooltipProvider>
                            </div>
                        </div>
                    </CardBox>
                </ResizablePanel>
                <ResizableHandle withHandle />

                <ResizablePanel minSize={30} defaultSize={35}>
                    <CardBox>
                        <div
                            className={`flex justify-between w-full ${headerStyle}`}
                        >
                            <div>
                                <h1 className="text-xl font-bold">Inbox</h1>
                            </div>
                            <div className="h-full flex items-center">
                                <Tabs defaultValue={`${isAllMail}`}>
                                    <TabsList className="grid w-full grid-cols-2">
                                        <TabsTrigger
                                            value="true"
                                            onClick={(e) => setIsAllMail(true)}
                                        >
                                            All Mail
                                        </TabsTrigger>
                                        <TabsTrigger
                                            value="false"
                                            onClick={(e) => setIsAllMail(false)}
                                        >
                                            Unread
                                        </TabsTrigger>
                                    </TabsList>
                                </Tabs>
                            </div>
                        </div>
                        <div className="p-4 block">
                            <Input placeholder="search"></Input>
                            <ScrollArea className="h-[700px] mt-4">
                                <ToggleGroup
                                    type="single"
                                    value={selectMail}
                                    size="sm"
                                    className="block"
                                >
                                    {mails
                                        .filter((x) => isAllMail || !x.isRead)
                                        .map((x) => {
                                            return (
                                                <ToggleGroupItem
                                                    onClick={() =>
                                                        setSelectMail(x.mailId)
                                                    }
                                                    className="w-full mb-2 rounded-sm border"
                                                    key={x.mailId}
                                                    value={x.mailId}
                                                >
                                                    {x.title}
                                                </ToggleGroupItem>
                                            )
                                        })}
                                </ToggleGroup>

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
                        <SelectMail
                            item={mails.find((x) => x.mailId == selectMail)!}
                        ></SelectMail>
                    </CardBox>
                </ResizablePanel>
            </ResizablePanelGroup>
        </>
    )
}
