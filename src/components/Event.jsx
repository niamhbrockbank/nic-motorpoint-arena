import styles from "../styles/Home.module.scss";
import Image from "next/image";
import { Inter } from "next/font/google";
import describeDates from "@/utils/describeDates";
import { ArrowRight } from "react-bootstrap-icons";

const inter = Inter({ subsets: ["latin"] });

export default function Event({ event }) {
  const { name, url, image, dates } = event;

  const datesDescription = describeDates(dates);

  return (
    <div className={`${styles.card} ${inter.className}`}>
      {image && <Image src={image} alt={name} width="220" height="100" />}
      <span onClick={() => url && window.open(url, "_blank")}>
        <h2>{name}</h2>
        <p>{datesDescription}</p>
        {url &&
        <div className={styles.link}>
          <p>VIEW EVENT</p>
          <ArrowRight />
        </div>
}
      </span>
    </div>
  );
}
