import { Container } from "@mui/system";
import { Text } from "../../components/Text";
import { ArrowRight, ArrowLeft } from "phosphor-react";
import classNames from "classnames";
import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import quoteImg from "../../../assets/img/quote.svg";

import styles from "./index.module.scss";
import { useCallback, useRef, useState } from "react";
import OutlinedButton from "../../components/Button/Outlined";

const resources = [
  {
    bg: "https://unsplash.com/photos/C_1jjFJioWg/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MjN8fG5hdHVyZSUyMGpveXxlbnwwfHx8fDE2NzM3MTA4MDk&force=true&w=640",
    title: "Cooking with style",
    overlay: "#7D64FC",
    subtitle: "Learn the style of cooking by professional chefs and cooks ",
  },
  {
    bg: "https://unsplash.com/photos/C_1jjFJioWg/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MjN8fG5hdHVyZSUyMGpveXxlbnwwfHx8fDE2NzM3MTA4MDk&force=true&w=640",
    title: "Event held this year",
    overlay: "#2B283D",
    subtitle: "Learn the style of cooking by professional chefs and cooks ",
  },
  {
    bg: "https://unsplash.com/photos/C_1jjFJioWg/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MjN8fG5hdHVyZSUyMGpveXxlbnwwfHx8fDE2NzM3MTA4MDk&force=true&w=640",
    title: "Top 5 competitors",
    overlay: "#2B283D",
    subtitle: "Learn the style of cooking by professional chefs and cooks ",
  },
  {
    bg: "https://unsplash.com/photos/C_1jjFJioWg/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MjN8fG5hdHVyZSUyMGpveXxlbnwwfHx8fDE2NzM3MTA4MDk&force=true&w=640",
    title: "Cooking with style",
    overlay: "#7D64FC",
    subtitle: "Learn the style of cooking by professional chefs and cooks ",
  },
  {
    bg: "https://unsplash.com/photos/C_1jjFJioWg/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MjN8fG5hdHVyZSUyMGpveXxlbnwwfHx8fDE2NzM3MTA4MDk&force=true&w=640",
    title: "Cooking with style",
    overlay: "#7D64FC",
    subtitle: "Learn the style of cooking by professional chefs and cooks ",
  },
];

export default function OurResources() {
  const [selection, setSelection] = useState(0);
  const flicking = useRef<Flicking>();

  return (
    <div className={styles.base}>
      <Container maxWidth="xl" className={styles.content}>
        <div className={styles.topbar}>
          <Text variant="heading">Our Resources</Text>
          <div className={styles.actions}>
            <button data-disabled={selection === 0} className={styles.view_all}>
              <Text variant="button">View all</Text>
            </button>
          </div>
        </div>
        <div className={styles.resources}>
          <Flicking
            ref={(el) => (flicking.current = el as any)}
            align="prev"
            circular
            onChanged={(ev) => {
              setSelection(ev.index);
            }}
          >
            {resources.map((u, i) => {
              return (
                <div
                  className={classNames("flicking-panel", styles.card_wrapper)}
                  key={u.title + i}
                >
                  <div
                    className={styles.card}
                    style={{
                      backgroundImage: `url('${u.bg}')`,
                    }}
                  >
                    <div
                      className={styles.card__content}
                      style={{
                        backgroundColor: `${u.overlay}90`,
                      }}
                    >
                      <Text variant="feature" className={styles.title}>
                        {u.title}
                      </Text>
                      <Text variant="body:small" className={styles.subtitle}>
                        {u.subtitle}
                      </Text>
                      <div className={styles.ctas}>
                        <OutlinedButton className={styles.explore}>
                          <Text variant="button">Explore now</Text>
                        </OutlinedButton>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Flicking>
        </div>
      </Container>
    </div>
  );
}
