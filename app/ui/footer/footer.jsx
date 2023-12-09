import { FaTelegram, FaInstagram, FaTiktok } from "react-icons/fa";
import Image from "next/image";

import styles from "./footer.module.css";

const links = [
  {
    url: "https://web.telegram.org/a/",
    icon: FaTelegram,
  },
  {
    url: "https://www.instagram.com/",
    icon: FaInstagram,
  },
  {
    url: "https://www.tiktok.com/uk-UA/",
    icon: FaTiktok,
  },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Image
        src="/images/logo.svg"
        width={100}
        height={100}
        alt="Logo With Me"
        className={styles.logo}
      />
      <ul className={styles.socialList}>
        {links.map((link) => (
          <li key={link.url}>
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.socialLink}`}
            >
              <link.icon />
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
}
