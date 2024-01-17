import { Button } from '~/components/ui/button'
import CardForms, { type CardFormProps } from '~/components/card-forms'
import { Checkbox } from '~/components/ui/checkbox'
import { ToastAction } from '~/components/ui/toast'
import { useToast } from '~/components/ui/use-toast'
export default function Display() {
    const choice = [
        'Recents',
        'Home',
        'Applications',
        'Desktop',
        'Downloads',
        'Documents',
    ]
    const { toast } = useToast()
    return (
        <CardForms
            title="Display"
            des="Turn items on or off to control what's displayed in the app."
        >
            <div>
                <div className="mb-4">
                    <label className="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-base">
                        Sidebar
                    </label>
                    <p className="text-[0.8rem] text-muted-foreground">
                        Select the items you want to display in the sidebar.
                    </p>
                </div>
            </div>
            <div>
                {choice.map((x, index) => {
                    return (
                        <div className="flex gap-2 mb-2" key={index}>
                            <Checkbox checked={index <= 1}></Checkbox>
                            <label className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-normal">
                                {x}
                            </label>
                        </div>
                    )
                })}
            </div>
            <Button
                size="sm"
                onClick={() => {
                    toast({
                        title: 'Scheduled: Catch up ',
                        description: 'Friday, February 10, 2023 at 5:57 PM',
                        action: (
                            <ToastAction altText="Goto schedule to undo">
                                Undo
                            </ToastAction>
                        ),
                    })
                }}
            >
                Update display
            </Button>
        </CardForms>
    )
}
