import Image from "next/image";
import styles from "./about.module.css";

export default function About() {
  return (
    <section className="section" id="about">
      <div className={styles.about}>
        <article className={styles.wrap}>
          <Image
            src="/images/creative-events.png"
            width={1000}
            height={1000}
            alt="Creative events"
            className={styles.image}
          />
          <div>
            <h2 className={styles.title}>Create events</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate.
              <br />
              Velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum.
            </p>
          </div>
        </article>

        <article className={styles.wrap}>
          <Image
            src="/images/dont-be-alone.png"
            width={1000}
            height={1000}
            alt="Don’t be alone - find meet up buddy"
            className={styles.image}
          />
          <div>
            <h2 className={styles.title}>
              Don’t be alone - <br />
              <span>find meet up buddy</span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate.
              <br />
              Velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
