import { ReactNode } from "react";
import { useAccordionContext } from "./Accordion";
import { useAccordionItemContext } from "./AccordionItem";

export function AccordionTitle({
  className,
  children,
}: {
  className: string;
  children: ReactNode;
}) {
  const { toggleItem } = useAccordionContext();
  const id = useAccordionItemContext();

  return (
    <h3 className={className} onClick={() => toggleItem(id)}>
      {children}
    </h3>
  );
}
