import LoadLinks from "../loadLinks/loadLinks";

import styles from "./hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <h1 className={styles.title}>
        Find Your <br />
        New
        <br />
        Friends
      </h1>
      <p className={styles.text}>Create memories together!</p>
      <LoadLinks />
    </section>
  );
}
