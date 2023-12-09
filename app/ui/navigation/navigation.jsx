"use client";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { IoClose } from "react-icons/io5";
import scrollToSection from "../../lib/scrollToSection";

import styles from "./navigation.module.css";

const links = [
  {
    name: "About App",
    path: "/about",
  },
  {
    name: "Events",
    path: "/events",
  },
  {
    name: "Blog",
    path: "/blog",
  },
];

export default function Navigation({ closeMenu }) {
  const pathname = usePathname();
  const router = useRouter();

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
        <button
          type="button"
          className={styles.button}
          onClick={() => {
            if (pathname !== "/") {
              router.push("/");
            }
            scrollToSection("download");
            closeMenu();
          }}
        >
          Download App
        </button>
      </nav>
    </div>
  );
}
