import Image from "next/image";
import Link from "next/link";
import Burger from "../burger/burger";
import MainNav from "../main-nav/main-nav";
import Socials from "../socials/socials";
import GetAppButton from "../get-app-button/get-app-button";

import styles from "./header.module.css";

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
    path: "/blog",
  },
];

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.wrap}>
        <Link href={"/"} className={styles.link}>
          <Image
            priority
            className={styles.logo}
            src="/images/logo.svg"
            width={100}
            height={100}
            alt="Logo With Me"
          />
        </Link>
        <div className={styles.burgerWrap}>
          <Burger />
        </div>
        <div className={styles.navWrap}>
          <MainNav links={links} />
          <Socials />
          <GetAppButton />
        </div>
      </div>
    </header>
  );
}
