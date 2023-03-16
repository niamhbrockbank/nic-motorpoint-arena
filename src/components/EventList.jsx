import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import Event from "./Event";

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
    imageUrl: "",
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
  return (
    <>
      <div className={styles.description}>
        <h1>{title}</h1>
        <p>Making space for culture and shared experience.</p>
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
