import data from "../../data/faq.json";
import Card from "../faq-card/card";

import styles from "./faq.module.css";

export default function Faq() {
  return (
    <section className="section" id="faq">
      <div className={styles.faq}>
        <h2 className={styles.title}>Frequently Asked Questions</h2>
        <ul className={styles.list}>
          {data.map((el) => (
            <Card key={el.id} el={el} />
          ))}
        </ul>
      </div>
    </section>
  );
}
