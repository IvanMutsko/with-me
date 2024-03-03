import Link from "next/link";

import { IoClose, IoLogoTiktok } from "react-icons/io5";
import { AiFillInstagram } from "react-icons/ai";

import styles from "./navigation.module.css";

const links = [
  {
    name: "About Us",
    path: "/#about",
  },
  {
    name: "FAQ",
    path: "/#faq",
  },
  {
    name: "Blog",
    path: "/#blog",
  },
];

export default function Navigation({ closeMenu }) {
  return (
    <div className={styles.wrap}>
      <button
        type="button"
        className={styles.close}
        onClick={() => closeMenu()}
      >
        <IoClose />
      </button>
      <nav className={styles.navWrap}>
        <ul className={styles.list}>
          {links.map((link) => (
            <li key={link.name}>
              <Link
                className={styles.navLink}
                href={link.path}
                onClick={() => {
                  closeMenu();
                }}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className={styles.socials}>
          <Link
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillInstagram />
          </Link>
          <Link
            href="https://www.tiktok.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoTiktok />
          </Link>
        </div>
        <Link
          className={styles.button}
          href="#download"
          onClick={() => {
            closeMenu();
          }}
        >
          Get the App
        </Link>
      </nav>
    </div>
  );
}
