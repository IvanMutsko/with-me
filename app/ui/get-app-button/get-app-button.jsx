import Link from "next/link";

import styles from "./get-app-button.module.css";

export default function GetAppButton() {
  return (
    <Link className={styles.button} href="#download">
      Get the App
    </Link>
  );
}
