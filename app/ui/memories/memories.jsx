import Carousel from "../carousel/carousel";
import GetAppButton from "../get-app-button/get-app-button";

import styles from "./memories.module.css";

export default function Memories() {
  return (
    <section className="section">
      <div className={styles.memories}>
        <div className={styles.wrap}>
          <h2 className={styles.title}>
            With Me
            <br />
            We create Memories
          </h2>
          <GetAppButton />
        </div>
        <Carousel />
      </div>
    </section>
  );
}
