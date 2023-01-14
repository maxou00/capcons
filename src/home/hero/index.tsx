import { Button, Container } from "@mui/material";
import { Box } from "@mui/system";
import { ArrowRight } from "phosphor-react";
import { FaGooglePlay, FaApple } from "react-icons/fa";
import GradientButton from "../../components/Button/Gradient";
import { Text } from "../../components/Text";
import styles from "./index.module.scss";

import heroImg1 from "../../../assets/img/home_hero_1.png";
import heroImg2 from "../../../assets/img/home_hero_2.png";
import heroImg3 from "../../../assets/img/home_hero_3.png";
import heroImg4 from "../../../assets/img/home_hero_4.png";
import classNames from "classnames";
import { useEffect, useState } from "react";
import gsap from "gsap";
import { useNodeRect } from "../../hooks/useNodeRect";

export default function HomeHero() {
  const circle1 = useNodeRect();
  const circle2 = useNodeRect();
  const circle3 = useNodeRect();
  const circle4 = useNodeRect();

  useEffect(() => {
    if (
      circle1.ref.current &&
      circle2.ref.current &&
      circle3.ref.current &&
      circle4.ref.current
    ) {
      let nodes = [
        circle1.ref.current as HTMLElement,
        circle2.ref.current as HTMLElement,
        circle3.ref.current as HTMLElement,
        circle4.ref.current as HTMLElement,
      ];

      let rects = nodes.map((n) => n.getBoundingClientRect());

      let durationPerNode = 0.5;
      let opacityFrom = 0;
      let opacityTo = 1;

      let timeline = gsap.timeline();

      timeline
        .set(nodes[0], { visibility: "visible" })
        .fromTo(
          nodes[0],
          { y: -rects[0].height, opacity: opacityFrom },
          { y: 0, opacity: opacityTo, duration: durationPerNode }
        )
        .set(nodes[0], { opacity: opacityTo })
        .set(nodes[1], { visibility: "visible" })
        .fromTo(
          nodes[1],
          { x: rects[1]!.width, opacity: opacityFrom },
          { x: 0, opacity: opacityTo, duration: durationPerNode }
        )
        .set(nodes[1], { opacity: opacityTo })
        .set(nodes[2], { visibility: "visible" })
        .fromTo(
          nodes[2],
          { x: -rects[2].width, opacity: opacityFrom },
          { x: 0, opacity: opacityTo, duration: durationPerNode }
        )
        .set(nodes[2], { opacity: opacityTo })
        .set(nodes[3], { visibility: "visible" })
        .fromTo(
          nodes[3],
          { y: rects[3].width, opacity: opacityFrom },
          { y: 0, opacity: opacityTo, duration: durationPerNode }
        )
        .set(nodes[3], { opacity: opacityTo });
    }
  }, []);

  return (
    <Box className={styles.hero}>
      <Container maxWidth="xl" className={styles.container}>
        <div className={styles.side_text}>
          <Text variant="headline1" className={styles.hero__title}>
            <span>Share</span> your <span>Moments</span> with{" "}
            <span>Circles</span>
          </Text>
          <Text variant="body:bold" className={styles.hero__subtitle}>
            Capcons is a social network based on the concept of social circles,
            It will make being social more secure, more colourful, more
            meaningful and more vibrant
          </Text>
          <div className={styles.ctas}>
            <GradientButton className={styles.cta_signup}>
              <Text variant="button">Signup</Text>
              <ArrowRight size={24} />
            </GradientButton>
            <div className={styles.stores}>
              <button className={styles.cta_store_apple}>
                <FaApple fontSize={24} />
                <Text variant="button">Apple store</Text>
              </button>
              <button className={styles.cta_store_play}>
                <FaGooglePlay fontSize={24} />
                <Text variant="button">Android play</Text>
              </button>
            </div>
          </div>
        </div>
        <div className={styles.animated}>
          <div className={styles.images}>
            <div
              ref={(el) => (circle1.ref.current = el as any)}
              className={classNames(styles.circle, styles.circle1)}
            >
              <div className={styles.inner}>
                <div className={styles.rect}></div>
                <img className={styles.img} src={heroImg1.src} alt="person" />
              </div>
            </div>
            <div
              ref={(el) => (circle2.ref.current = el as any)}
              className={classNames(styles.circle, styles.circle2)}
            >
              <div className={styles.inner}>
                <div className={styles.rect}></div>
                <img className={styles.img} src={heroImg2.src} alt="person" />
              </div>
            </div>
            <div
              ref={(el) => (circle3.ref.current = el as any)}
              className={classNames(styles.circle, styles.circle3)}
            >
              <div className={styles.inner}>
                <div className={styles.rect}></div>
                <img className={styles.img} src={heroImg3.src} alt="person" />
              </div>
            </div>
            <div
              ref={(el) => (circle4.ref.current = el as any)}
              className={classNames(styles.circle, styles.circle4)}
            >
              <div className={styles.inner}>
                <div className={styles.rect}></div>
                <img className={styles.img} src={heroImg4.src} alt="person" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Box>
  );
}
