import Head from "next/head";
import Features from "../src/home/features";
import HomeHero from "../src/home/hero";
import MakeTheMostOfYourStories from "../src/home/make-the-most-of-your-stories";
import OurUsers from "../src/home/our-users";
import CapConUsageQuote from "../src/home/quote";
import UpcomingEvent from "../src/home/upcoming-events";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Capcons</title>
        <meta
          name="description"
          content="Capcons is a social network based on the concept of social circles, It will make being social more secure, more colourful, more meaningful and more vibrant"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <HomeHero />
        <Features />
        <CapConUsageQuote />
        <OurUsers />
        <MakeTheMostOfYourStories />
        <UpcomingEvent />
      </main>
    </>
  );
}
