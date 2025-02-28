"use client"
import React, { useState } from "react";
import Burger from "@/svg/header/burger";
import BurgerClose from "@/svg/menu/burger-close";
import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.scss";

/* Example menu data fetched from API */
const menuList = [
  { text: "דף הבית", route: "/" },
  { text: "תחומי עיסוק", route: "/design-system" },
  { text: "שומות לדוגמא", route: "/form" },
  { text: "אודות", route: "/form" },
  { text: "המלצות", route: "/form" },
];

function Header() {
  // State for managing the menu open/close status
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggles the menu open/close state
  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  // Generates navigation links based on the menu list
  const renderNavLinks = () => {
    return menuList.map((item, index) => (
      <Link
        href={item.route}
        key={index}
        className={styles["item"]}
        onClick={toggleMenu} // Closes menu when a link is clicked
      >
        <h4 className={styles["item-text"]} >{item.text}</h4>
      </Link>
    ));
  };

  // Determines active class for menu visibility
  const menuActiveClass = isMenuOpen ? styles["active"] : "";

  return (
    <header className={styles["wrapper"]}>
      <div className={styles["header"]}>
        <button className={styles["burger"]} onClick={toggleMenu}>
          <Burger />
        </button>

        <div className={`${styles["menu-wrapper"]} ${menuActiveClass}`}>
          <div className={styles["menu"]}>
            <div className={styles["menu-logo-container"]}>
              <Image src="/assets/logos/logo.png" alt="" fill />
            </div>

            <nav className={styles["nav"]}>{renderNavLinks()}</nav>

            <button className={styles["close-x"]} onClick={toggleMenu}>
              <BurgerClose />
            </button>
          </div>
          <div className={styles["backdrop"]} onClick={toggleMenu}></div>
        </div>
      </div>
    </header>
  );
}

export default Header;
