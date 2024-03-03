"use client";

import { useEffect, useState } from "react";
import { HiMenu } from "react-icons/hi";

import Navigation from "../navigation/navigation";

import styles from "./burger.module.css";

export default function Burger() {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  const handleBurgerClick = () => {
    setIsBurgerOpen(!isBurgerOpen);
  };

  const closeMenu = () => {
    setIsBurgerOpen(false);
  };

  useEffect(() => {
    document.body.classList.add("modal-open");

    const pressEsc = (evt) => {
      if (evt.code === "Escape") {
        setIsBurgerOpen(false);
      }
    };

    window.addEventListener("keydown", pressEsc);

    return () => {
      window.removeEventListener("keydown", pressEsc);
    };
  }, []);

  return (
    <>
      {!isBurgerOpen && (
        <button className={styles.button} onClick={handleBurgerClick}>
          <HiMenu />
        </button>
      )}

      <div className={isBurgerOpen ? styles.open : styles.menu}>
        <div onClick={closeMenu} className={styles.overlay}>
          <Navigation closeMenu={handleBurgerClick} />
        </div>
      </div>
    </>
  );
}
