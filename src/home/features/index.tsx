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
import { useEffect, useState } from "react";
import gsap from "gsap";
import { randomInRange } from "../../utils/random";
import { clamp } from "../../utils/clamp";

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
  const [root, setRoot] = useState<HTMLDivElement>();
  const [ring1, setRing1] = useState<HTMLDivElement>();
  const [ring2, setRing2] = useState<HTMLDivElement>();
  const [ring3, setRing3] = useState<HTMLDivElement>();

  /*useEffect(() => {
    if (root && ring1 && ring2 && ring3) {
      const interval = setInterval(() => {
        let rootRect = root.getBoundingClientRect();
        let rings = [ring1, ring2, ring3];
        let rects = rings.map((r) => r.getBoundingClientRect());
        let positions = rings.map((r) => [
          randomInRange(-20, 20),
          randomInRange(-20, 20),
        ]);

        let timeline = gsap.timeline();

        rings.forEach((r, i) => {
          let position = {
            x: clamp(rootRect.x + (rects[i].width * positions[i][0]), rootRect.x, rootRect.x + rootRect.width),
            y: clamp(rootRect.y + (rects[i].height * positions[i][1]), rootRect.y, rootRect.y + rootRect.height)
          };
          timeline.fromTo(
            r,
            { x: 0, y: 0 },
            { x: position.x, y: position.y, duration: 2 }
          )
          .set(r, { x: position.x, y: position.y });
        });

        timeline.progress(1).progress(0);
      }, 12500);
      return () => clearInterval(interval);
    }
  }, [root, ring1, ring2, ring3]);
  */

  return (
    <div ref={(el) => setRoot(el as any)} className={styles.base}>
      <div
        ref={(el) => setRing1(el as any)}
        className={classNames(styles.ring, styles.ring1)}
      >
        <div className={styles.inner}></div>
      </div>
      <div
        ref={(el) => setRing2(el as any)}
        className={classNames(styles.ring, styles.ring2)}
      >
        <div className={styles.inner}></div>
      </div>
      <div
        ref={(el) => setRing3(el as any)}
        className={classNames(styles.ring, styles.ring3)}
      >
        <div className={styles.inner}></div>
      </div>

      <Container maxWidth="xl" className={styles.content}>
        <div className={styles.topbar}>
          <Text variant="heading">Features</Text>
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
