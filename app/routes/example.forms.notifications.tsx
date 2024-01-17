import CardForms, { type CardFormProps } from "~/components/card-forms";
import { Card, CardDescription, CardTitle } from '~/components/ui/card'
import { Switch } from '~/components/ui/switch'

export default function Notifications() {
    const menuNoti = [
        {
            title: 'Communication emails',
            detail: 'Receive emails about your account activity.',
            isCheck: false,
            disabled: false,
        },
        {
            title: 'Marketing emails',
            detail: 'Receive emails about new products, features, and more.',
            isCheck: false,
            disabled: false,
        },
        {
            title: 'Social emails',
            detail: 'Receive emails for friend requests, follows, and more.',
            isCheck: true,
            disabled: false,
        },
        {
            title: 'Security emails',
            detail: 'Receive emails about your account activity and security.',
            isCheck: true,
            disabled: true,
        },
    ]
    return (
        <CardForms
            title="Notification"
            des="Configure how you receive notifications."
        >
            <div>a</div>
            <div>
                <h3 className="mb-4 text-lg font-medium">
                    Email Notifications
                </h3>
                <div className="flex flex-col gap-y-4">
                    {menuNoti.map((x, index) => {
                        return (
                            <div className="p-4 rounded-md border" key={index}>
                                <CardTitle className="mb-2">
                                    {x.title}
                                </CardTitle>
                                <CardDescription className="flex justify-between">
                                    <div>{x.detail}</div>
                                    <Switch
                                        checked={x.isCheck}
                                        disabled={x.disabled}
                                    ></Switch>
                                </CardDescription>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div>v</div>
            <div>n</div>
        </CardForms>
    )
}