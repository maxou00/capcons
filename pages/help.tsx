import Head from "next/head";
import Faqs from "../src/help/faqs";
import HelpHero from "../src/help/hero";
import styles from "../styles/Help.module.scss";

export default function HelpPage() {
  return (
    <>
      <Head>
        <title>Help | Capcons</title>
        <meta
          name="description"
          content="Capcons is a social network based on the concept of social circles, It will make being social more secure, more colourful, more meaningful and more vibrant"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <HelpHero />
        <Faqs />
      </main>
    </>
  );
}
