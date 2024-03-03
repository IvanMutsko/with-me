import { LuMapPin } from "react-icons/lu";

import styles from "./start.module.css";

export default function Start() {
  return (
    <section className="section">
      <div className={styles.start}>
        <h2 className={styles.title}>How it started ...</h2>
        <div className={styles.location}>
          <LuMapPin />
          <p>Lviv, Ukraine</p>
        </div>

        <div className={styles.messageWrap}>
          <div className={styles.container}>
            <div className={styles.subContainer}>
              <div className={styles.mainCircle}></div>
              <p className={styles.name}>Valeria</p>

              <article className={styles.topWrapper}>
                <h3 className={styles.ellipseTitle}>The problem:</h3>
                <p className={styles.ellipseInsideText}>
                  I moved to the new city... hm, where can I find friends?
                </p>
              </article>

              <article className={styles.bottomWrapper}>
                <h3 className={styles.ellipseTitle}>The solution:</h3>
                <p className={styles.ellipseInsideText}>
                  I moved to the new city... hm, where can I find friends?
                </p>
              </article>
            </div>
            <p>The result:</p>
            <p>Telegram Chat Bot</p>
          </div>

          <div className={styles.container}>
            <div
              className={`${styles.subContainer} ${styles.secondSubContainer}`}
            >
              <div className={styles.mainCircle}></div>
              <p className={styles.name}>Valeria</p>

              <article className={styles.topWrapper}>
                <h3 className={styles.ellipseTitle}>The problem:</h3>
                <p className={styles.ellipseInsideText}>
                  But I want more, I want to help people connect people...
                </p>
              </article>
            </div>
            <p>The result:</p>
            <p>Mobile App</p>
          </div>
        </div>
        <p className={styles.signature}>
          Now we connect people all ower the world
        </p>
      </div>
    </section>
  );
}
