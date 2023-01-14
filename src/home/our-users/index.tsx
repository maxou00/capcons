import { Container } from "@mui/system";
import { Text } from "../../components/Text";
import { ArrowRight, ArrowLeft } from "phosphor-react";
import classNames from "classnames";
import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import quoteImg from "../../../assets/img/quote.svg";

import styles from "./index.module.scss";
import { useCallback, useRef, useState } from "react";

const users = [
  {
    avatar:
      "https://unsplash.com/photos/C_1jjFJioWg/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MjN8fG5hdHVyZSUyMGpveXxlbnwwfHx8fDE2NzM3MTA4MDk&force=true&w=640",
    quote:
      "There are many variations of passages of Lorem Ipsum available, the majority have suffered alteration in some form, by injected humour",
    name: "Alexander Maxwell",
    role: "Founder",
  },
  {
    avatar:
      "https://unsplash.com/photos/C_1jjFJioWg/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MjN8fG5hdHVyZSUyMGpveXxlbnwwfHx8fDE2NzM3MTA4MDk&force=true&w=640",
    quote:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
    name: "Alexander Maxwell",
    role: "Founder",
  },
  {
    avatar:
      "https://unsplash.com/photos/C_1jjFJioWg/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MjN8fG5hdHVyZSUyMGpveXxlbnwwfHx8fDE2NzM3MTA4MDk&force=true&w=640",
    quote:
      "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable",
    name: "Alexander Maxwell",
    role: "Founder",
  },
  {
    avatar:
      "https://unsplash.com/photos/C_1jjFJioWg/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MjN8fG5hdHVyZSUyMGpveXxlbnwwfHx8fDE2NzM3MTA4MDk&force=true&w=640",
    quote:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English",
    name: "Alexander Maxwell",
    role: "Founder",
  },
  {
    avatar:
      "https://unsplash.com/photos/C_1jjFJioWg/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MjN8fG5hdHVyZSUyMGpveXxlbnwwfHx8fDE2NzM3MTA4MDk&force=true&w=640",
    quote:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
    name: "Alexander Maxwell",
    role: "Founder",
  },
  {
    avatar:
      "https://unsplash.com/photos/C_1jjFJioWg/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MjN8fG5hdHVyZSUyMGpveXxlbnwwfHx8fDE2NzM3MTA4MDk&force=true&w=640",
    quote:
      "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish",
    name: "Alexander Maxwell",
    role: "Founder",
  },
];

export default function OurUsers() {
  const [selection, setSelection] = useState(0);
  const flicking = useRef<Flicking>();

  const goPrev = useCallback(() => {
    if (flicking.current) {
      if (flicking.current.animating) {
        return;
      }

      if (selection > 0) {
        flicking.current.prev();
      }
    }
  }, [selection]);

  const goNext = useCallback(() => {
    if (flicking.current) {
      if (flicking.current.animating) {
        return;
      }

      if (selection < users.length - 1) {
        flicking.current.next();
      }
    }
  }, [selection]);

  return (
    <div className={styles.base}>
      <Container maxWidth="xl" className={styles.content}>
        <div className={styles.topbar}>
          <Text variant="heading" style={{ color: "#fff" }}>
            Our Users
          </Text>
          <div className={styles.arrows}>
            <button
              data-disabled={selection === 0}
              onClick={goPrev}
              className={styles.arrow_prev}
            >
              <ArrowLeft size={16} />
            </button>
            <button
              data-disabled={selection === users.length - 1}
              onClick={goNext}
              className={styles.arrow_next}
            >
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
        <div className={styles.users}>
          <Flicking
            ref={(el) => (flicking.current = el as any)}
            align="prev"
            onChanged={(ev) => {
              setSelection(ev.index);
            }}
          >
            {users.map((u, i) => {
              let quote = u.quote;
              let max = 160;
              if (quote.length > max) {
                quote = quote.substring(0, max) + "...";
              }

              return (
                <div
                  className={classNames("flicking-panel", styles.card_wrapper)}
                  key={u.name + i}
                >
                  <div className={styles.card}>
                    <img
                      src={quoteImg.src}
                      alt="quote"
                      className={styles.quote_symbol}
                    />
                    <Text variant="body" className={styles.title}>
                      {quote}
                    </Text>
                    <div className={styles.user}>
                      <img
                        className={styles.avatar}
                        src={u.avatar}
                        alt={u.name}
                      />
                      <div className={styles.user__details}>
                        <Text variant="title" className={styles.user__name}>
                          {u.name}
                        </Text>
                        <Text
                          variant="body:small"
                          className={styles.user__role}
                        >
                          {u.role}
                        </Text>
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
