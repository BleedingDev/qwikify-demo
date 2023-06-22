/** @jsxImportSource react */
import {
  Accordion as AccordionPrimitive,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../primitives/accordion'

interface AccordionItem {
  title: string
  content: string
}

interface AccordionDemoProps {
  items: AccordionItem[]
}

export function Accordion({ items }: AccordionDemoProps) {
  return (
    <AccordionPrimitive type="single" collapsible className="w-full">
      {items.map((item, index) => (
        <AccordionItem key={index} value={`item-${index + 1}`}>
          <AccordionTrigger>{item.title}</AccordionTrigger>
          <AccordionContent>{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </AccordionPrimitive>
  )
}
