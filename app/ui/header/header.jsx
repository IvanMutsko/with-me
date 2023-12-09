import Image from "next/image";
import Link from "next/link";
import Burger from "../burger/burger";

import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href={"/"}>
        <Image
          src="/images/logo.svg"
          width={100}
          height={100}
          alt="Logo With Me"
          className={styles.logo}
        />
      </Link>
      <Burger />
    </header>
  );
}
