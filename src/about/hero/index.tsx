import { Container } from "@mui/material";
import { Text } from "../../components/Text";
import styles from "./index.module.scss";

export default function AboutHero() {
  return (
    <div className={styles.base}>
      <div className={styles.inner}>
        <Container maxWidth="xl">
          <Text variant="heading" className={styles.text}>
            CapCons is a social network for anyone who loves sharing their
            stories, experiences and wants control over who they share it with.
          </Text>
        </Container>
      </div>
    </div>
  );
}
