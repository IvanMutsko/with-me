import Image from "next/image";
import styles from "./load-links.module.css";

export default function LoadLinks() {
  return (
    <div className={styles.wrap}>
      <a
        href="https://play.google.com/store/games"
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.link}`}
      >
        <Image
          src="/images/google-play-badge.svg"
          width={100}
          height={100}
          alt="Google Play load app"
          className={styles.image}
        />
      </a>
      <a
        href="https://www.apple.com/app-store/"
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.link}`}
      >
        <Image
          src="/images/app-store-badge.svg"
          width={100}
          height={100}
          alt="Google Play load app"
          className={styles.image}
        />
      </a>
    </div>
  );
}
