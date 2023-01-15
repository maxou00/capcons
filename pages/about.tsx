import Head from "next/head";
import AboutHero from "../src/about/hero";
import styles from "../styles/About.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>About Us | Capcons</title>
        <meta
          name="description"
          content="Capcons is a social network based on the concept of social circles, It will make being social more secure, more colourful, more meaningful and more vibrant"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <AboutHero />
      </main>
    </>
  );
}
