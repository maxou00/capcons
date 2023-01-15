import { Container } from "@mui/material";
import GradientButton from "../../../components/Button/Gradient";
import { Text } from "../../../components/Text";
import styles from "./index.module.scss";

export default function SubscribeToNewsletter() {
  return (
    <div className={styles.base}>
      <Container className={styles.container}>
        <Text variant="body" className={styles.text}>
          To know more about us, subscribe to our newsletter for the latest
          headlines about Capcons, Company announcements and product updates.
        </Text>
        <div className={styles.form_subscribe}>
          <input
            className={styles.input}
            type="email"
            placeholder="Enter your email"
          />
          <GradientButton className={styles.btn}>
            <Text variant="button">Subscribe</Text>
          </GradientButton>
        </div>
      </Container>
    </div>
  );
}
