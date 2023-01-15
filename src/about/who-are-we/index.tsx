import Section1 from "./section1";
import Section2 from "./section2";
import { Container } from "@mui/material";
import styles from "./index.module.scss";
import { Text } from "../../components/Text";

export default function WhoAreWe() {
  return (
    <div className={styles.base}>
      <Container maxWidth="xl" className={styles.container}>
        <div className={styles.top}>
          <Text variant="heading" className={styles.title}>
            Who are we?
          </Text>
          <Text variant="feature" className={styles.subtitle}>
            We are a company that is building technology solution for people and
            businesses to capitalise conversations about things that they are
            passionate about.
          </Text>
        </div>
        <div className={styles.sections}>
          <Section1 />
          <Section2 />
        </div>
      </Container>
    </div>
  );
}
