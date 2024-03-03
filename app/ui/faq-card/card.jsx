import styles from "./card.module.css";

export default function Card({ el }) {
  return (
    <li className={styles.card}>
      <h3 className={styles.question}>{el.question}</h3>
      <div className={styles.hoverWrap}>
        <p className={styles.answer}>{el.answer}</p>
      </div>
    </li>
  );
}
