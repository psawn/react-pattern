import { createContext, ReactNode, useContext, useState } from "react";

type AccordionContextType = {
  openItemId: null | string;
  openItem: (id: string) => void;
  closeItem: () => void;
};

const AccordionContext = createContext<AccordionContextType | null>(null);

// eslint-disable-next-line react-refresh/only-export-components
export function useAccordionContext() {
  const ctx = useContext(AccordionContext);

  if (!ctx) {
    throw new Error("Accordion related components must be wrapped by <Accordion>");
  }

  return ctx;
}

export function Accordion({ children, className }: { children: ReactNode; className: string }) {
  const [openItemId, setOpenItemId] = useState<null | string>(null);

  function openItem(id: string) {
    setOpenItemId(id);
  }

  function closeItem() {
    setOpenItemId(null);
  }

  const contextValue = {
    openItemId,
    openItem,
    closeItem,
  };

  return (
    <AccordionContext.Provider value={contextValue}>
      <ul className={className}>{children}</ul>
    </AccordionContext.Provider>
  );
}
