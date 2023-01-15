import { Container } from "@mui/material";
import { ArrowRight } from "phosphor-react";
import ContainedButton from "../../components/Button/Contained";
import { Text } from "../../components/Text";
import { useNodeRect } from "../../hooks/useNodeRect";
import styles from "./section1.module.scss";

export default function Section1() {
  return (
    <div className={styles.base}>
      <div className={styles.section_img}></div>
      <div className={styles.section_text}>
        <Text variant="feature">
          We are concerned about our data to have privacy by not sharing with
          all
        </Text>
        <Text variant="body">
          At Capcons, we trust our creators to pay for the value we provide them
          and hence we neither sell their data nor we create algorithms that
          stops them in conversing with their own social circles.
        </Text>
      </div>
    </div>
  );
}
