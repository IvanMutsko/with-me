import styles from "./loadLinks.module.css";

export default function LoadLinks() {
  return (
    <div className={styles.wrap}>
      <a
        href="https://play.google.com/store/games"
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.link} ${styles.googleApp}`}
      ></a>
      <a
        href="https://www.apple.com/app-store/"
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.link} ${styles.appStore}`}
      ></a>
    </div>
  );
}
