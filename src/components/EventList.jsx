import { useEffect, useState } from "react";
import styles from "../styles/Home.module.scss";
import Event from "./Event";

export default function EventList() {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;

  const loaderEvent = {
    id: 0,
    name: "",
    dates: [
      {
        date: "2023-04-16",
      },
    ],
    image: "",
    url: "http://localhost:3000/",
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
    sortByDate(event1, event2)
  );

  const title = "WHAT'S ON";
  const scrambledTitle = scramble(title);

  return (
    <>
      <div className={styles.hero}>
        <h1 className={styles.scramble}>{scrambledTitle}</h1>
        <p className={styles.description}>
        Showcasing the biggest names in music, comedy, entertainment and sport.
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

function sortByDate(a, b) {
  const firstDateA = a.dates[0].date;
  const firstDateB = b.dates[0].date;

  if (firstDateA < firstDateB) {
    return -1;
  } else if (firstDateB < firstDateA) {
    return 1;
  }

  return 0;
}

/**
 * Converts a string into a series of span elements each with the classname styles.letter
 * @param {string} str
 * @returns {JSX.Element[]} array of span elements
 */
function scramble(str) {
  const arr = str.split("");
  const elementArr = arr.map((letter, i) => (
    <span className={styles.letter} key={i}>
      {letter}
    </span>
  ));

  return elementArr;
}
