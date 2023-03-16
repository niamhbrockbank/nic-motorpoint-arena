import styles from "../styles/Home.module.css";
import Image from "next/image";
import moment from "moment";

export default function Event({ event }) {
  const { name, url, image, dates } = event;

  const formattedDates = dates.map((d) => moment(d.date).format("Do MMM YYYY"));

  return (
    <div className={styles.card}>
      <span onClick={() => window.open(url, "_blank")}>
        <Image
          src={image ? image : "/./images/loading.jpeg"}
          alt={name}
          width="220"
          height="100"
        />
        <h2>{name}</h2>
        <p>
          {dates.length > 1
            ? `${formattedDates[0]} - ${formattedDates[dates.length - 1]}`
            : formattedDates[0]}
        </p>
      </span>
    </div>
  );
}
