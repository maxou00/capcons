import { Container, Stack } from "@mui/material";
import GradientButton from "../../components/Button/Gradient";
import { Text } from "../../components/Text";
import styles from "./index.module.scss";

export default function HelpHero() {
  return (
    <div className={styles.base}>
      <Container maxWidth="xl" className={styles.inner}>
        <Text variant="feature" className={styles.text}>
          Hello, how can we help?
        </Text>

        <div className={styles.form}>
          <div className={styles.form__search}>
            <input
              className={styles.input}
              type="email"
              placeholder="Ask for a question or search a key note"
            />
            <GradientButton className={styles.btn}>
              <Text variant="button">Search</Text>
            </GradientButton>
          </div>

          <Stack
            width="100%"
            direction="row"
            alignItems="center"
            spacing="20px"
            className={styles.form__completion}
          >
            <Text variant="body:small">Popular searches :</Text>
            <Stack direction="row" alignItems="center" spacing="10px" className={styles.matches}>
              <Text variant="body:small">community design</Text>
              <Text variant="body:small">events</Text>
              <Text variant="body:small">courses</Text>
            </Stack>
          </Stack>
        </div>
      </Container>
    </div>
  );
}
