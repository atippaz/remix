import CardForms, { type CardFormProps } from "~/components/card-forms";

export default function Notifications() {
  const slots: CardFormProps = { content: (<></>), des: <></>, title: <></> }
  return <CardForms slot={slots} />
}