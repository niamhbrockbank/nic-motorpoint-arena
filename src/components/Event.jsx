import styles from "../styles/Home.module.css";

export default function Event({ event }) {
  return (
    <div className={styles.card}>
      <span onClick={() => window.open(event.url, "_blank")}>
      <img src={event.image} alt={event.name} width="200" height="100"/>
        <h2>{event.name}</h2>
        <p>{event.dates ? event.dates[0].date : "TBC"}</p>
      </span>
    </div>
  );
}
