import { Button, Container } from "@mui/material";
import { Box } from "@mui/system";
import { ArrowRight } from "phosphor-react";
import GradientButton from "../../components/Button/Gradient";
import { Text } from "../../components/Text";
import styles from "./index.module.scss";

export default function HomeHero() {
  return (
    <Box className={styles.hero}>
      <Container maxWidth="xl" className={styles.container}>
        <div className={styles.side_text}>
          <Text variant="headline1" className={styles.hero__title}>
            <span>Share</span> your <span>Moments</span> with <span>Circles</span>
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
                <Text variant="button">Apple store</Text>
              </button>
              <button className={styles.cta_store_play}>
                <Text variant="button">Android play</Text>
              </button>
            </div>
          </div>
        </div>
      </Container>
    </Box>
  );
}
