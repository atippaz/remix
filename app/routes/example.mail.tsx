import { CaretSortIcon } from '@radix-ui/react-icons'
import {
    Archive,
    ArchiveX,
    CheckIcon,
    Clock,
    File,
    Forward,
    IceCream,
    Inbox,
    Info,
    MessageSquare,
    MoreVertical,
    Reply,
    ReplyAll,
    SearchIcon,
    Send,
    ShoppingCart,
    Trash2,
    User2,
} from 'lucide-react'
import { ReactNode, useEffect, useState } from 'react'
import { Badge } from '~/components/ui/badge'
import { Button } from '~/components/ui/button'
import { Card } from '~/components/ui/card'
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
} from '~/components/ui/command'
import { Input } from '~/components/ui/input'
import { Label } from '~/components/ui/label'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '~/components/ui/popover'
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from '~/components/ui/resizable'
import { ScrollArea, ScrollBar } from '~/components/ui/scroll-area'
import { Separator } from '~/components/ui/separator'
import { Switch } from '~/components/ui/switch'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '~/components/ui/tabs'
import { Textarea } from '~/components/ui/textarea'
import { ToggleGroup, ToggleGroupItem } from '~/components/ui/toggle-group'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '~/components/ui/tooltip'
import { cn } from '~/lib/utils'
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
            {children[1]}
        </div>
    )
}
interface Tag {
    label: string
    style: 'default' | 'secondary' | 'destructive' | 'outline'
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
function SelectMail({ item }: { item?: Mail }) {
    return (
        <div className="flex-1 flex flex-col">
            <div className="flex-1 flex flex-col">
                <div className="p-4 flex gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                        {item?.formUser
                            .split(' ')
                            .map((x) => x[0].toLocaleUpperCase())}
                    </div>
                    <div className="grid gap-1">
                        <div className="font-semibold">{item?.formUser}</div>
                        <div className="line-clamp-1 text-xs">
                            {item?.title}
                        </div>
                        <div className="line-clamp-1 text-xs">
                            <span className="font-medium">Reply-To:&nbsp;</span>
                            {item?.email}
                        </div>
                    </div>
                    <div className="ml-auto text-xs text-muted-foreground">
                        {item?.sendTime.toLocaleString('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric',
                            hour: 'numeric',
                            minute: 'numeric',
                            second: 'numeric',
                            hour12: true,
                        })}
                    </div>
                </div>
                <div className="flex-1 whitespace-pre-wrap  border-y p-4 text-sm">
                    {item?.content}
                </div>
            </div>
            <div className=" p-4">
                <div>
                    <Textarea placeholder={`Reply ${item?.formUser} ...`} />
                </div>
                <div className="flex justify-between mt-4">
                    <Label className=" font-normal  flex items-center gap-2 text-xs">
                        <Switch></Switch> Mute this thread
                    </Label>
                    <div>
                        <Button size="sm">Send</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
function HeaderMailReading() {
    return (
        <div className="w-full flex justify-between">
            <div className="flex">
                <TooltipProvider delayDuration={50}>
                    <Tooltip>
                        <TooltipTrigger>
                            <Button variant="ghost">
                                <Archive className="w-[15px]"></Archive>
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>Archive</TooltipContent>
                    </Tooltip>
                    <Tooltip>
                        <TooltipTrigger>
                            <Button variant="ghost">
                                <ArchiveX className="w-[15px]"></ArchiveX>
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>Move to Junk</TooltipContent>
                    </Tooltip>
                    <Tooltip>
                        <TooltipTrigger>
                            <Button variant="ghost">
                                <Trash2 className="w-[15px]"></Trash2>
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>Move to Trash</TooltipContent>
                    </Tooltip>
                </TooltipProvider>
                <div className="my-1">
                    <Separator orientation="vertical"></Separator>
                </div>

                <TooltipProvider delayDuration={50}>
                    <Tooltip>
                        <TooltipTrigger>
                            <Button variant="ghost">
                                <Clock className="w-[15px]"></Clock>
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>Snooze</TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </div>
            <div className="flex">
                <TooltipProvider delayDuration={50}>
                    <Tooltip>
                        <TooltipTrigger>
                            <Button variant="ghost">
                                <Reply className="w-[15px]"></Reply>
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>Reply</TooltipContent>
                    </Tooltip>
                    <Tooltip>
                        <TooltipTrigger>
                            <Button variant="ghost">
                                <ReplyAll className="w-[15px]"></ReplyAll>
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>Reply All</TooltipContent>
                    </Tooltip>
                    <Tooltip>
                        <TooltipTrigger>
                            <Button variant="ghost">
                                <Forward className="w-[15px]"></Forward>
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>Forward</TooltipContent>
                    </Tooltip>
                </TooltipProvider>
                <div className="my-1">
                    <Separator orientation="vertical"></Separator>
                </div>

                <Button variant="ghost">
                    <MoreVertical className="w-[15px]"></MoreVertical>
                </Button>
            </div>
        </div>
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
        {
            userName: 'Gygle Monthy',
            email: 'gyglemonthy@example.com',
        },
        {
            userName: 'Octomon Hontly',
            email: 'octomonhontly@example.com',
        },
    ]
    const topics = [
        `Meeting Tomorrow`,
        `To: Tosto`,
        `Re: Project Update`,
        `New Project Idea`,
        `Vacation Plans`,
        `Re: Conference Registration`,
        `Re: Question about Budget`,
    ]
    const tags: Tag[] = [
        { label: 'work', style: 'default' },
        { label: 'personal', style: 'outline' },
        { label: 'meeting', style: 'secondary' },
        { label: 'important', style: 'secondary' },
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
    function generateRandomDate(from: Date, to: Date) {
        return new Date(
            from.getTime() + Math.random() * (to.getTime() - from.getTime())
        )
    }

    function getDateDiff(date: Date) {
        const dateNow = new Date()
        const diffTime = Math.abs(dateNow.getTime() - date.getTime())
        const diffDays = Math.round(diffTime / (1000 * 3600 * 24))
        return `${
            diffDays >= 365
                ? Math.floor(diffDays / 365) + ' Year'
                : diffDays >= 30
                  ? Math.floor(diffDays / 30) + ' Month'
                  : diffDays + ' Day'
        } ago`
    }
    useEffect(() => {
        let i = 0
        while (i <= 30) {
            let randomIndex = Math.floor(Math.random() * topics.length)
            const topic = topics[randomIndex]
            randomIndex = Math.floor(Math.random() * users.length)
            const user = users[randomIndex]
            randomIndex = Math.floor(Math.random() * paragraphs.length)
            const paragraph = paragraphs[randomIndex]
            const tagCount = Math.floor(Math.random() * (tags.length - 1)) + 1
            let tagSelect = 0
            const tag: Tag[] = []
            while (tagSelect < tagCount) {
                randomIndex = Math.floor(Math.random() * tags.length)
                if (!tag.some((x) => x == tags[randomIndex])) {
                    tag.push(tags[randomIndex])
                }
                tagSelect++
            }
            randomIndex = Math.random()
            const mailObj = {
                mailId: `${i}`,
                title: topic,
                content: paragraph,
                formUser: user.userName,
                isRead: randomIndex > 0.6,
                sendTime: generateRandomDate(
                    new Date(2023 + Math.floor(randomIndex), 0, 1),
                    new Date()
                ),
                tag: tag,
                email: user.email,
            }
            setMails((prev) => [...prev, mailObj])
            i++
        }
    }, [])
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState('alicia@example.com')
    const mailList = [
        { icon: 'a', label: 'Alicia Koch', value: 'alicia@example.com' },
        { icon: 'b', label: 'Alicia Koch', value: 'alicia@gmail.com' },
        { icon: 'c', label: 'Alicia Koch', value: 'alicia@me.com' },
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
                    minSize={4}
                    maxSize={20}
                    defaultSize={20}
                >
                    <CardBox className="h-full">
                        <Popover open={open} onOpenChange={setOpen}>
                            <PopoverTrigger asChild>
                                <Button
                                    variant="outline"
                                    role="combobox"
                                    aria-expanded={open}
                                    className="w-[200px] justify-between"
                                >
                                    {value
                                        ? mailList.find(
                                              (mail) => mail.value === value
                                          )?.label
                                        : 'Select Mail'}
                                    <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-[200px] p-0">
                                <Command>
                                    <CommandGroup>
                                        {mailList.map((mail, index) => (
                                            <CommandItem
                                                key={index}
                                                value={mail.value}
                                                onSelect={(currentValue) => {
                                                    setValue(
                                                        currentValue === value
                                                            ? ''
                                                            : currentValue
                                                    )
                                                    setOpen(false)
                                                }}
                                            >
                                                {mail.value}
                                                <CheckIcon
                                                    className={cn(
                                                        'ml-auto h-4 w-4',
                                                        value === mail.value
                                                            ? 'opacity-100'
                                                            : 'opacity-0'
                                                    )}
                                                />
                                            </CommandItem>
                                        ))}
                                    </CommandGroup>
                                </Command>
                            </PopoverContent>
                        </Popover>

                        <div className=" w-full h-full">
                            <div className="p-3 ">
                                <TooltipProvider>
                                    {menuMail.map((x, index) => {
                                        return (
                                            <Tooltip
                                                key={index}
                                                delayDuration={50}
                                            >
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
                                    {menuMore.map((x, index) => {
                                        return (
                                            <Tooltip
                                                key={index}
                                                delayDuration={50}
                                            >
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
                    <CardBox className="h-full">
                        <div
                            className={`flex justify-between w-full ${headerStyle}`}
                        >
                            <div className="flex items-center">
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
                        <div className="px-4 pt-4 block">
                            <div
                                className={cn(
                                    'flex h-10 items-center rounded-md border border-input bg-white pl-3 text-sm ring-offset-background focus-within:ring-1 focus-within:ring-ring focus-within:ring-offset-0'
                                )}
                            >
                                <SearchIcon className="h-[16px] w-[16px]  text-muted-foreground" />
                                <input
                                    type="search"
                                    placeholder="Search"
                                    className="w-full p-2 placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                                />
                            </div>
                            <ScrollArea className="h-[700px] mt-4">
                                <ToggleGroup
                                    type="single"
                                    value={selectMail}
                                    size="sm"
                                    className="block"
                                >
                                    {mails
                                        .filter(
                                            (x) =>
                                                isAllMail ||
                                                (!isAllMail && !x.isRead)
                                        )
                                        .map((x, index) => {
                                            return (
                                                <ToggleGroupItem
                                                    onClick={() =>
                                                        setSelectMail(x.mailId)
                                                    }
                                                    className="w-full h-full p-0 mb-2"
                                                    key={index}
                                                    value={x.mailId}
                                                >
                                                    <div className="flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent">
                                                        <div className="w-full flex items-center justify-between">
                                                            <div className="font-semibold flex text-center">
                                                                <div>
                                                                    {x.formUser}
                                                                </div>
                                                                <div className="flex items-center">
                                                                    {!x.isRead && (
                                                                        <span className="flex h-2 w-2 rounded-full bg-blue-600 ml-2 mt-1"></span>
                                                                    )}
                                                                </div>
                                                            </div>
                                                            <div className=" text-xs text-muted-foreground">
                                                                {getDateDiff(
                                                                    x.sendTime
                                                                )}
                                                            </div>
                                                        </div>
                                                        <div className="text-start text-xs font-medium">
                                                            {x.title}
                                                        </div>
                                                        <div className="w-full text-start line-clamp-2 text-xs text-muted-foreground">
                                                            {x.content}
                                                        </div>
                                                        <div className="flex gap-2">
                                                            {x.tag.map(
                                                                (m, index) => {
                                                                    return (
                                                                        <div
                                                                            key={
                                                                                index
                                                                            }
                                                                        >
                                                                            <Badge
                                                                                variant={
                                                                                    m.style
                                                                                }
                                                                                className="w-fit h-fit"
                                                                            >
                                                                                {
                                                                                    m.label
                                                                                }
                                                                            </Badge>
                                                                        </div>
                                                                    )
                                                                }
                                                            )}
                                                        </div>
                                                    </div>
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
                    <CardBox className="flex flex-col h-full">
                        <HeaderMailReading></HeaderMailReading>
                        <SelectMail
                            item={mails.find((x) => x.mailId == selectMail)!}
                        ></SelectMail>
                    </CardBox>
                </ResizablePanel>
            </ResizablePanelGroup>
        </>
    )
}
