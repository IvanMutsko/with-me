import LoadLinks from "../load-links/load-links";

import styles from "./hero.module.css";

export default function Hero() {
  return (
    <section className="section">
      <div className={styles.hero}>
        <h1 className={styles.title}>
          Crafting Memories, Uniting Minds
          <br />
          for Any Ideas
        </h1>
        <p className={styles.text}>
          Find your new meet up buddy for any event and activity in any city of
          the world.
        </p>
        <LoadLinks />
      </div>
    </section>
  );
}
