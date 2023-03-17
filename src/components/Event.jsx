import styles from "../styles/Home.module.scss";
import Image from "next/image";
import moment from "moment";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Event({ event }) {
  const { name, url, image, dates } = event;

  const formattedDates = dates.map((d) => moment(d.date).format("Do MMM YYYY"));

  return (
    <div className={`${styles.card} ${inter.className}`}>
      <span onClick={() => window.open(url, "_blank")}>
        <Image
          src={image ? image : "/./images/loading.jpeg"}
          alt={name}
          width="220"
          height="100"
        />
        <h3>{name}</h3>
        <p>
          {dates.length > 1
            ? `${formattedDates[0]} - ${formattedDates[dates.length - 1]}`
            : formattedDates[0]}
        </p>
      </span>
    </div>
  );
}
