import styles from "../styles/Home.module.scss";

/**
 * Converts a string into a series of span elements each with the classname styles.letter
 * @param {string} str
 * @returns {JSX.Element[]} array of span elements
 */
export default function scramble(str) {
  const arr = str.split("");
  const elementArr = arr.map((letter, i) => (
    <span className={styles.letter} key={i}>
      {letter}
    </span>
  ));

  return elementArr;
}
