import { Container } from "@mui/material";
import { ArrowRight } from "phosphor-react";
import ContainedButton from "../../components/Button/Contained";
import { Text } from "../../components/Text";
import { useNodeRect } from "../../hooks/useNodeRect";
import styles from "./bottom.module.scss";

export default function SectionBottom() {
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
        <div></div>
        <div
          ref={(el) => (sectionImg.ref.current = el as any)}
          className={styles.section_img}
        ></div>
        <div
          ref={(el) => (sectionText.ref.current = el as any)}
          className={styles.section_text}
        >
          <Text variant="heading">Every Brand Needs a Circle</Text>
          <Text variant="body">
            Behind every successful company is the ability to engage and delight
            customers. Circles are enables to do just that
          </Text>
          <ContainedButton>
            <Text variant="button">Explore now</Text>
            <ArrowRight size={24} />
          </ContainedButton>
        </div>
      </Container>
    </div>
  );
}
