import { Container } from "@mui/material";
import Accordion from "../../components/accordion";
import AccordionItem from "../../components/accordion/item";
import { Text } from "../../components/Text";
import styles from "./index.module.scss";

const questions = [
  {
    title: "Why should i use capcons?",
    subtitle: `
        Yes! You can still focus on chat and build a community around it with
        Mighty. But unlike Slack and Discord, you’ll be able to explore more
        native features that complement your chat—like courses, paid
        memberships, events, and featured content.<br/><br/>
        You’ll also have unlimited
        members, which you’ll pay much more for on Slack.<br/><br/>
        And if you’re using
        bots and integrations to manage Discord (especially if you’re exploring
        web3 token-gating) you’ll find using the built-in native features much
        easier for you and easier for your members, too.
    `,
  },
  {
    title: "How is Capcons better than other social media platforms?",
    subtitle: `
        Yes! You can still focus on chat and build a community around it with
        Mighty. But unlike Slack and Discord, you’ll be able to explore more
        native features that complement your chat—like courses, paid
        memberships, events, and featured content.<br/><br/>
        You’ll also have unlimited
        members, which you’ll pay much more for on Slack.<br/><br/>
        And if you’re using
        bots and integrations to manage Discord (especially if you’re exploring
        web3 token-gating) you’ll find using the built-in native features much
        easier for you and easier for your members, too.
    `,
  },
  {
    title: "What payment method should I use?",
    subtitle: `
        Yes! You can still focus on chat and build a community around it with
        Mighty. But unlike Slack and Discord, you’ll be able to explore more
        native features that complement your chat—like courses, paid
        memberships, events, and featured content.<br/><br/>
        You’ll also have unlimited
        members, which you’ll pay much more for on Slack.<br/><br/>
        And if you’re using
        bots and integrations to manage Discord (especially if you’re exploring
        web3 token-gating) you’ll find using the built-in native features much
        easier for you and easier for your members, too.
    `,
  },
  {
    title: "Why should i use capcons?",
    subtitle: `
        Yes! You can still focus on chat and build a community around it with
        Mighty. But unlike Slack and Discord, you’ll be able to explore more
        native features that complement your chat—like courses, paid
        memberships, events, and featured content.<br/><br/>
        You’ll also have unlimited
        members, which you’ll pay much more for on Slack.<br/><br/>
        And if you’re using
        bots and integrations to manage Discord (especially if you’re exploring
        web3 token-gating) you’ll find using the built-in native features much
        easier for you and easier for your members, too.
    `,
  },
];
export default function Faqs() {
  return (
    <div className={styles.base}>
      <Container maxWidth="xl" className={styles.container}>
        <Text variant="heading">FAQs</Text>
        <Accordion>
          {questions.map((q, i) => {
            return (
              <AccordionItem
                key={q.title + i}
                title={<Text variant="body:bold" className={styles.title}>{q.title}</Text>}
                content={
                  <Text variant="body:small" dangerouslySetInnerHTML={{ __html: q.subtitle }}></Text>
                }
              />
            );
          })}
        </Accordion>
      </Container>
    </div>
  );
}
