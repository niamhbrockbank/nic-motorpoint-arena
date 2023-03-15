import { useEffect, useState } from "react";
import styles from "@/styles/Home.module.css";

export default function EventList() {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  const [events, setEvents] = useState(["No events found"]);

  useEffect(() => {
    async function fetchEvents() {
      try {
        const response = await fetch(
          `https://staging.national-ice-centre.com/api/events/read?token=${apiKey}`
        );
        const jsonBody = await response.json();
        setEvents(jsonBody.events);
      } catch (error) {
        console.error(error);
      }
    }
    fetchEvents();
  }, []);

  return (
    <>
      <div className={styles.description}>
        <h1>WHAT'S ON</h1>
        <p>Making space for culture and shared experience.</p>
      </div>
      <div className={styles.grid}>
        {events.map((event, i) => (
          <div key={i} className={styles.card}>
            <span>
              <h2>{event.name}</h2>
              <p>description</p>
            </span>
          </div>
        ))}
      </div>
    </>
  );
}
