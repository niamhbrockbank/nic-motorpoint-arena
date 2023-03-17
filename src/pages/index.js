import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.scss";
import EventList from "../components/EventList.jsx";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>NIC and Motorpoint Arena</title>
        <link rel="icon" href="/calendar-event.svg" />
        <meta
          name="description"
          content="What's on at the National Ice Centre and Motorpoint Arena Nottingham."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>
        <EventList />
      </main>
    </>
  );
}
