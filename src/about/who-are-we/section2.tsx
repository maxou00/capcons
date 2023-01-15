import { Container } from "@mui/material";
import { ArrowRight } from "phosphor-react";
import ContainedButton from "../../components/Button/Contained";
import { Text } from "../../components/Text";
import { useNodeRect } from "../../hooks/useNodeRect";
import styles from "./section2.module.scss";

export default function Section2() {
  return (
    <div className={styles.base}>
      <div className={styles.section_text}>
        <Text variant="feature">
          We expect to be paid for the value we create for our customers
        </Text>
        <Text variant="body">
          Our social network empowers content creators an ability to earn and
          charge for the value that they create for their audience.
        </Text>
      </div>
      <div className={styles.section_img}></div>
    </div>
  );
}
