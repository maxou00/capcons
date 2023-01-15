import { PropsWithChildren, useContext } from "react";
import { useCallback } from "react";
import { useState } from "react";
import { createContext } from "react";
import styles from "./index.module.scss";

interface AccordionContextType {
  active: string;
  activate: (id: string) => any;
}

const AccordionContext = createContext<AccordionContextType>({} as any);

export const useAccordion = () => {
  let ctx = useContext(AccordionContext);
  if (!ctx) {
    throw "useAccordion must be called within an accordion context";
  }
  return ctx;
};

const AccordionProvider = ({ children }: PropsWithChildren<{}>) => {
  const [active, activate] = useState("");

  return (
    <AccordionContext.Provider
      value={{
        active,
        activate,
      }}
    >
      {children}
    </AccordionContext.Provider>
  );
};

export default function Accordion({ children }: PropsWithChildren<{}>) {
  return (
    <AccordionProvider>
      <div className={styles.Accordion}>{children}</div>
    </AccordionProvider>
  );
}
