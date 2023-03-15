import styles from "@/styles/Home.module.css";

export default function Event({event}){
    return (
        <div className={styles.card}>
            <span>
              <h2>{event.name}</h2>
              <p>description</p>
              <p>{event.dates ? event.dates[0].date : 'TBC'}</p>
            </span>
        </div>
    )
}