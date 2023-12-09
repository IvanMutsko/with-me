import AutoplayCarousel from "../autoplayCarousel/autoplayCarousel";
import styles from "./homeAbout.module.css";

export default function About() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Who are we?</h2>
      <p className={styles.text}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum
        recusandae iste sed necessitatibus rem quis molestias officia vero? Illo
        eligendi sed repellendus nisi reiciendis repellat animi voluptas,
        provident dolor blanditiis.
      </p>
      <AutoplayCarousel />
    </section>
  );
}
