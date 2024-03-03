import Link from "next/link";
import { IoLogoTiktok } from "react-icons/io5";
import { AiFillInstagram } from "react-icons/ai";

import styles from "./socials.module.css";



export default function Socials() {
  return (
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
  );
}
