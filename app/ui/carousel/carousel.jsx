import Image from "next/image";
import slidesData from "../../data/slides.json";

import styles from "./carousel.module.css";

export default function Carousel() {
  return (
    <div className={styles.container}>
      <ul className={styles.track}>
        {slidesData.map((slide) => (
          <li key={slide.id} className={styles.card}>
            <Image
              src={slide.photo}
              width={1000}
              height={1000}
              alt={slide.name}
            />
          </li>
        ))}
        {slidesData.map((slide) => (
          <li key={slide.id} className={styles.card}>
            <Image
              src={slide.photo}
              width={1000}
              height={1000}
              alt={slide.name}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
