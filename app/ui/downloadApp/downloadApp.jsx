import LoadLinks from "../loadLinks/loadLinks";

import styles from "./downloadApp.module.css";

export default function DownloadApp() {
  return (
    <section className={styles.section} id="download">
      <h2 className={styles.title}>Download The App Now!</h2>
      <LoadLinks />
    </section>
  );
}
