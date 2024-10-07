import { Accordion, AccordionItem } from "@/components/ui/accordion";

export function CustomComponent2() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1" />
      <AccordionItem value="item-2" />
      <AccordionItem value="item-3" />
    </Accordion>
  );
}
