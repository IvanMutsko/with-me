import Image from "next/image";
import Link from "next/link";
import MainNav from "../main-nav/main-nav";
import Socials from "../socials/socials";

import styles from "./footer.module.css";
import LoadLinks from "../load-links/load-links";

const links = [
  {
    name: "About Us",
    path: "/#about",
  },
  {
    name: "Privacy Policy",
    path: "/policy",
  },
  {
    name: "Blog",
    path: "/blog",
  },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrap}>
        <Link href={"/"} className={styles.link}>
          <Image
            priority
            className={styles.logo}
            src="/images/white-logo.svg"
            width={100}
            height={100}
            alt="Logo With Me"
          />
        </Link>
        <LoadLinks />
        <div className={styles.navWrap}>
          <MainNav links={links} />
          <Socials />
        </div>
      </div>
    </footer>
  );
}
