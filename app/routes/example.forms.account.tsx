import { Form } from "@remix-run/react";
import CardForms, { type CardFormProps } from "~/components/card-forms";
import { CardDescription } from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { DatePicker } from '~/components/datetime'
import { useState } from "react";
export default function Account() {
  const [datetime, setDatetime] = useState<Date>()
  return (
    <CardForms title="Account" des="Update your account settings. Set your preferred language and timezone.">
      <Form>
        <div>
          <Label>Name</Label>
          <Input />
          <CardDescription>This is the name that will be displayed on your profile and in emails.</CardDescription>
        </div>
        <div>
          <Label>Date of birth</Label>
          <DatePicker emitEvent={(e: Date) => {
            setDatetime(e)
          }} />
          <CardDescription>Your date of birth is used to calculate your age.</CardDescription>
        </div>
        <div>
          <Label>Language</Label>

        </div>
      </Form>
    </CardForms>
  )
}