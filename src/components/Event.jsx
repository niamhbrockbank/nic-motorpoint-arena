import styles from "../styles/Home.module.scss";
import Image from "next/image";
import { Inter } from "next/font/google";
import describeDates from "@/utils/describeDates";

const inter = Inter({ subsets: ["latin"] });

export default function Event({ event }) {
  const { name, url, image, dates } = event;

  const datesDescription = describeDates(dates);

  return (
    <div className={`${styles.card} ${inter.className}`}>
      <Image
        src={image ? image : "/./images/loading.jpeg"}
        alt={name}
        width="220"
        height="100"
        placeholder="blur"
        blurDataURL="/./images/loading.jpeg"
      />
      <span onClick={() => window.open(url, "_blank")}>
        <h2>{name}</h2>
        <p>{datesDescription}</p>
        <div className={styles.link}>
          <p>VIEW EVENT</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            className="bi bi-arrow-right"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
            />
          </svg>
        </div>
      </span>
    </div>
  );
}
