import { useEffect, useState } from "react";
import styles from "../styles/Home.module.scss";
import Event from "./Event";
import scramble from "@/utils/scramble";
import sortByEarliest from "@/utils/sortByEarliest";
import { House } from "react-bootstrap-icons";

export default function EventList() {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;

  const loaderEvent = {
    id: 0,
    name: "",
    dates: [
      {
        date: "",
      },
    ],
    image: "",
    url: "",
  };
  const [events, setEvents] = useState([loaderEvent]);

  useEffect(() => {
    async function fetchEvents() {
      try {
        const response = await fetch(
          `https://staging.national-ice-centre.com/api/events/read?token=${apiKey}`
        );
        const jsonBody = await response.json();
        const nextEvents = jsonBody.events.map((event) => {
          return { ...event, id: crypto.randomUUID() };
        });

        setEvents(nextEvents);
      } catch (error) {
        console.error(error);
      }
    }
    fetchEvents();
  }, [apiKey]);

  const sortedEvents = events.sort((event1, event2) =>
    sortByEarliest(event1, event2)
  );

  const title = "WHAT'S ON";
  const scrambledTitle = scramble(title);

  return (
    <>
      <House
        className={styles.home}
        onClick={() =>
          window.open("https://www.motorpointarenanottingham.com/")
        }
      />
      <div className={styles.hero}>
        <h1 className={styles.scramble}>{scrambledTitle}</h1>
        <p className={styles.description}>
          Showcasing the biggest names in music, comedy, entertainment and
          sport.
        </p>
      </div>
      <div className={styles.grid}>
        {sortedEvents.map((event) => (
          <Event key={event.id} event={event} />
        ))}
      </div>
    </>
  );
}
