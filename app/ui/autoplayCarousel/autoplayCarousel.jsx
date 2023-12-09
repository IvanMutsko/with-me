import Image from "next/image";
import slidesData from "@/app/data/aboutSlides";

import styles from "./autoplayCarousel.module.css";

export default function AutoplayCarousel() {
  return (
    <div className={styles.container}>
      <ul className={styles.track}>
        {slidesData.map((slide) => (
          <li key={slide.id} className={styles.card}>
            <Image
              src={slide.photo}
              width={500}
              height={500}
              alt={slide.name}
            />
          </li>
        ))}
        {slidesData.map((slide) => (
          <li key={slide.id} className={styles.card}>
            <Image
              src={slide.photo}
              width={500}
              height={500}
              alt={slide.name}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
