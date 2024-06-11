import { createContext, ReactNode, useContext, useState } from "react";
import { AccordionItem } from "./AccordionItem";
import { AccordionTitle } from "./AccordionTitle";
import { AccordionContent } from "./AccordionContent";

type AccordionContextType = {
  openItemId: null | string;
  toggleItem: (id: string) => void;
};

const AccordionContext = createContext<AccordionContextType | null>(null);

// eslint-disable-next-line react-refresh/only-export-components
export function useAccordionContext() {
  const ctx = useContext(AccordionContext);

  if (!ctx) {
    throw new Error(
      "Accordion related components must be wrapped by <Accordion>"
    );
  }

  return ctx;
}

export function Accordion({
  children,
  className,
}: {
  children: ReactNode;
  className: string;
}) {
  const [openItemId, setOpenItemId] = useState<null | string>(null);

  function toggleItem(id: string) {
    setOpenItemId((prevId) => prevId === id ? null : id);
  }

  const contextValue = {
    openItemId,
    toggleItem
  };

  return (
    <AccordionContext.Provider value={contextValue}>
      <ul className={className}>{children}</ul>
    </AccordionContext.Provider>
  );
}

Accordion.Item = AccordionItem;
Accordion.Title = AccordionTitle;
Accordion.Content = AccordionContent;