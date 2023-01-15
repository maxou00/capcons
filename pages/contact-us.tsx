import Head from "next/head";
import { Container, Stack } from "@mui/material";
import styles from "../styles/Contact.module.scss";
import { MdFmdGood as Pin, MdPhone } from "react-icons/md";
import { Text } from "../src/components/Text";
import ContainedButton from "../src/components/Button/Contained";
import FormSendMessage from "../src/forms/send-message";

export default function ContactUs() {
  const mail = "reachout@capcons.com";
  return (
    <>
      <Head>
        <title>Contact us | Capcons</title>
        <meta
          name="description"
          content="Capcons is a social network based on the concept of social circles, It will make being social more secure, more colourful, more meaningful and more vibrant"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Container maxWidth="xl" className={styles.container}>
          <Stack
            direction="column"
            alignItems="flex-start"
            justifyContent="flex-start"
            spacing="100px"
          >
            <Stack
              direction="column"
              alignItems="flex-start"
              justifyContent="flex-start"
            >
              <Text variant="headline1">Contact us</Text>
              <Text variant="body" style={{ maxWidth: "378px" }}>
                We’re here to help! From product support to media inquiries,
                feel free to mail us at <a href={`mailto:${mail}`}>{mail}</a>
              </Text>
            </Stack>

            <Stack
              direction="column"
              alignItems="flex-start"
              justifyContent="flex-start"
              spacing="60px"
            >
              <Stack
                direction="column"
                alignItems="flex-start"
                justifyContent="flex-start"
                spacing="20px"
              >
                <Text variant="subheading">USA</Text>
                <Stack direction="row" spacing="8px" alignItems="flex-start">
                  <Pin size={21} />
                  <Text variant="body">
                    651 N Broad St, Suite 206, 19709 Middletown, Delaware.
                  </Text>
                </Stack>
                <Stack direction="row" spacing="8px" alignItems="flex-start">
                  <MdPhone size={21} />
                  <Text variant="body">+1 (308) 300-3078</Text>
                </Stack>
              </Stack>
              <Stack
                direction="column"
                alignItems="flex-start"
                justifyContent="flex-start"
                spacing="20px"
              >
                <Text variant="subheading">India</Text>
                <Stack direction="row" spacing="8px" alignItems="flex-start">
                  <Pin size={21} />
                  <Text variant="body">
                    D 197, Street no.8, Laxmi Nagar, 110092, Delhi
                  </Text>
                </Stack>
                <Stack direction="row" spacing="8px" alignItems="flex-start">
                  <MdPhone size={21} />
                  <Text variant="body">+91 9873274783</Text>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
          <Stack
            direction="column"
            alignItems="flex-start"
            justifyContent="flex-start"
            spacing="40px"
          >
            <Text variant="subheading">Send us a message</Text>
            <FormSendMessage />
            <ContainedButton className={styles.formBtn}>
              <Text variant="button">Send</Text>
            </ContainedButton>
          </Stack>
        </Container>
      </main>
    </>
  );
}
