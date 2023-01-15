import GradientButton from "../../components/Button/Gradient";
import { Text } from "../../components/Text";
import styles from "./index.module.scss";

export default function JoinUs() {
  return (
    <div className={styles.base}>
      <Text variant="heading">Ready to join?</Text>
      <Text variant="body" className={styles.subtitle}>
        Be a part of something that creates meaning for you and our team, if you
        believe and driven towards our vision and mission.
      </Text>
      <GradientButton className={styles.button}>
        <Text variant="button">Apply now</Text>
      </GradientButton>
    </div>
  );
}
