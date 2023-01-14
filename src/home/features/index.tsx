import { Container } from "@mui/system";
import { Text } from "../../components/Text";

import featureIcon from "../../../assets/icons/CopySimple.svg";
import chatIcon from "../../../assets/icons/ChatCircleDots.svg";
import eventIcon from "../../../assets/icons/Confetti.svg";
import livestreamIcon from "../../../assets/icons/Livestream.svg";
import ecommerceIcon from "../../../assets/icons/Bag.svg";
import gamificationIcon from "../../../assets/icons/Gamepad.svg";
import subscriptionIcon from "../../../assets/icons/Hand.svg";
import analyticIcon from "../../../assets/icons/Bars.svg";

import styles from "./index.module.scss";
import classNames from "classnames";
import { useCallback, useEffect, useMemo, useState } from "react";
import gsap from "gsap";
import { randomInRange } from "../../utils/random";
import { clamp } from "../../utils/clamp";
import { Moon, Sun } from "phosphor-react";

const features = [
  {
    icon: featureIcon,
    title: "Feeds",
    subtitle:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
  },
  {
    icon: chatIcon,
    title: "Chats",
    subtitle:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
  },
  {
    icon: eventIcon,
    title: "Events",
    subtitle:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
  },
  {
    icon: livestreamIcon,
    title: "Live streams",
    subtitle:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
  },
  {
    icon: ecommerceIcon,
    title: "E-commerce",
    subtitle:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
  },
  {
    icon: gamificationIcon,
    title: "Gamifications",
    subtitle:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
  },
  {
    icon: subscriptionIcon,
    title: "Subscriptions",
    subtitle:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
  },
  {
    icon: analyticIcon,
    title: "Analytics",
    subtitle:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
  },
];

export default function Features() {
  const [mode, setMode] = useState("light");

  const switchMode = useCallback(() => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  }, []);

  const style = useMemo(() => {
    if(mode === "dark") {
        return {
            '--text-color': '#f9f9f9',
            '--card-surface': '#03071e',
            '--card-icon-bg': '#2b2d42',
            '--switch-bg': '#03071e',
            '--bg-color': '#2b2d42'
        }
    }

    return {
        '--text-color': '#181818',
        '--card-surface': '#2B283D10',
        '--card-icon-bg': '#fff',
        '--switch-bg': '#2b283d',
        '--bg-color': '#F0A44425'
    }
  }, [mode]);

  return (
    <div style={style as any} className={styles.base}>
      <div className={classNames(styles.ring, styles.ring1)}>
        <div className={styles.inner}></div>
      </div>
      <div className={classNames(styles.ring, styles.ring2)}>
        <div className={styles.inner}></div>
      </div>
      <div className={classNames(styles.ring, styles.ring3)}>
        <div className={styles.inner}></div>
      </div>

      <Container maxWidth="xl" className={styles.content}>
        <div className={styles.topbar}>
          <Text variant="heading">Features</Text>
          <button className={styles.theme_switch} onClick={switchMode}>
            {mode === "light" ? (
              <Moon weight="fill" size={24} />
            ) : (
              <Sun weight="fill" size={24} />
            )}
          </button>
        </div>
        <div className={styles.features}>
          {features.map((f, i) => {
            let subtitle = f.subtitle;
            let max = 60;
            if (subtitle.length > max) {
              subtitle = subtitle.substring(0, max) + "...";
            }
            return (
              <div className={styles.feature} key={f.title}>
                <div className={styles.img_wrapper}>
                  <img className={styles.img} src={f.icon.src} alt={f.title} />
                </div>
                <Text variant="subheading" className={styles.title}>
                  {f.title}
                </Text>
                <div className={styles.subtitle}>
                  <Text
                    variant="body:small"
                    className={styles.subtitle__content}
                  >
                    {subtitle}
                    <span className={styles.subtitle__cta}>Explore</span>
                  </Text>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
}
