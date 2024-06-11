import { ReactNode, createContext, useContext } from "react";

const AccordionItemContext = createContext<string | null>(null);

// eslint-disable-next-line react-refresh/only-export-components
export function useAccordionItemContext() {
  const ctx = useContext(AccordionItemContext);

  if (!ctx) {
    throw new Error(
      "AccordionItem related components must be wrapped by <Accordion.Item>"
    );
  }

  return ctx;
}

export function AccordionItem({
  id,
  className,
  children,
}: {
  id: string;
  className: string;
  children: ReactNode;
}) {
  return (
    <AccordionItemContext.Provider value={id}>
      <li className={className}>{children}</li>
    </AccordionItemContext.Provider>
  );
}
