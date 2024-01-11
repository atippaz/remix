import { ReactNode } from "react"
import { Separator } from "./ui/separator"

export interface CardFormProps {
  title: ReactNode
  des: ReactNode
  children: ReactNode
}

export default function CardForms({ children, des, title }: CardFormProps) {
  return (
    <div className="m-6">
      <div >
        <div className="text-lg font-[500]">
          {title}
        </div>
        <div className="">
          {des}
        </div>
      </div>
      <Separator className="my-6 " />

      {children}
    </div >)
}
CardForms.displayName = 'CardForms'