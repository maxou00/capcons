import { CaretDown } from "phosphor-react";
import { useNodeRect } from "../../hooks/useNodeRect";
import { useAccordion } from ".";
import { useEffect, useMemo } from "react";
import { v4 } from "uuid";
import styles from "./item.module.scss";

export default function AccordionItem({
  title,
  content,
  defaultOpen,
}: {
  title: string | JSX.Element;
  content: string | JSX.Element;
  defaultOpen?: boolean;
}) {
  const header = useNodeRect();
  const panel = useNodeRect();

  const accordion = useAccordion();
  const id = useMemo(() => {
    return v4();
  }, []);

  const isOpen = useMemo(() => {
    return Boolean(accordion.active === id);
  }, [accordion.active, id]);

  useEffect(() => {
    if (defaultOpen) {
      accordion.activate(id);
    }
  }, [defaultOpen, id]);

  return (
    <div
      className={styles.AccordionItem}
      data-open={isOpen}
      style={{
        '--transition-duration': '150ms',
        "--panel-opacity": `${isOpen} ? 0 : 1`, 
        "--panel-height": `${isOpen ? (panel.client?.height ?? 0) : 0}px`,
      } as any}
    >
      <div
        ref={(el) => (header.ref.current = el as any)}
        onClick={() => {
          isOpen ? accordion.activate("") : accordion.activate(id);
        }}
        data-open={isOpen}
        className={styles.header}
      >
        <div className={styles.headerLeft} data-open={isOpen}>
          <h2 className={styles.title} data-active={isOpen}>
            {title}
          </h2>
        </div>
        <div>
          <span data-open={isOpen} className={styles.iconButton}>
            <CaretDown fontSize="24px" alt={isOpen ? "close" : "open"} />
          </span>
        </div>
      </div>
      <div
        data-open={isOpen}
        className={styles.panel}
      >
        <div
          data-open={isOpen}
          ref={(el) => (panel.ref.current = el as any)}
          className={"w-full " + styles.content}
        >
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
}
