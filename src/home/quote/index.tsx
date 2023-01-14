import { Container } from "@mui/material";
import { Text } from "../../components/Text";
import { useNodeRect } from "../../hooks/useNodeRect";
import styles from "./index.module.scss";

export default function CapConUsageQuote() {
  const innerLayer = useNodeRect();

  return (
    <div className={styles.base}>
      <div
        style={{
          height: (innerLayer.client?.height ?? 0) + "px",
        }}
        className={styles.content}
      >
        <div
          ref={(el) => (innerLayer.ref.current = el as any)}
          className={styles.inner_layer}
        >
          <Container maxWidth="md">
            <Text variant="feature">
              CapCons allows people to have control over who they share their
              stories and experiences with. Your stories will reach to 100% of
              the people in your circles.
            </Text>
          </Container>
        </div>
      </div>
    </div>
  );
}
