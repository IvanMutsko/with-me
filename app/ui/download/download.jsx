import LoadLinks from "../load-links/load-links";
import styles from "./download.module.css";

export default function Download() {
  return (
    <section className={styles.section} id="download">
      <div className={styles.download}>
        <h2 className={styles.title}>Download The App Now!</h2>
        <LoadLinks />
      </div>
    </section>
  );
}
