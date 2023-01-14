import { Container } from "@mui/material";
import { ArrowRight } from "phosphor-react";
import ContainedButton from "../../components/Button/Contained";
import { Text } from "../../components/Text";
import { useNodeRect } from "../../hooks/useNodeRect";
import styles from "./top.module.scss";

export function SectionTop() {
  const container = useNodeRect();
  const sectionImg = useNodeRect();
  const sectionText = useNodeRect();

  return (
    <div className={styles.base}>
      <Container
        ref={(el) => (container.ref.current = el as any)}
        maxWidth="xl"
        className={styles.container}
        style={{
          height: `${Math.max(
            sectionImg.client?.height ?? 0,
            sectionText.client?.height ?? 0
          )}px`,
        }}
      >
        <div
          ref={(el) => (sectionText.ref.current = el as any)}
          className={styles.section_img}
        ></div>
        <div
          ref={(el) => (sectionText.ref.current = el as any)}
          className={styles.section_text}
        >
          <Text variant="heading">Make the Most of Your Stories</Text>
          <Text variant="body">
            Ditch unreliable algorithms and reach your audience with Magic
            Reach, Reach more people and engage your audience like never before
          </Text>
          <ContainedButton>
            <Text variant="button">Explore now</Text>
            <ArrowRight size={24} />
          </ContainedButton>
        </div>
        <div></div>
      </Container>
    </div>
  );
}
