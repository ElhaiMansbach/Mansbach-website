"use client";
import React, { useState, useEffect } from "react";
import { clsx } from "@/utils/functions";
import Link from "next/link";
import Image from "next/image";
import Burger from "@/svg/header/burger";
import BurgerClose from "@/svg/menu/burger-close";
import styles from "./index.module.scss";
import { usePathname, useRouter } from "next/navigation";
const menuItems = [
  { id: 1, text: "דף הבית", route: "/" },
  { id: 2, text: "אודות", route: "/about" },
  { id: 3, text: "שומות לדוגמא", route: "/examples" },
  { id: 4, text: "קישורים", route: "/links" },
  { id: 5, text: "מסמכים נדרשים", route: "/documents" },
  { id: 6, text: "צור קשר", route: "/contact" },
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activePage, setActivePage] = useState("/");
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // setTimeout(() => {
    //   setActivePage(pathname);
    // }, 100);

    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? "hidden" : "auto";
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = "auto";
  };

  const handleSelectedPage = (id) => {
    setActivePage(id);
    closeMenu();
  };

  return (
    <header
      className={clsx(
        styles["header-wrapper"],
        scrolled && styles["header-scrolled"]
      )}
    >
      <div className={styles["header-container"]}>
        <button
          className={styles["header-burger-btn"]}
          onClick={toggleMenu}
          aria-label="תפריט"
        >
          <Burger />
        </button>

        <nav className={styles["header-nav-desktop"]}>
          <ul className={styles["header-nav-list"]}>
            {menuItems.map((item, index) => (
              <li key={index} className={styles["header-nav-item"]}>
                <Link
                  href={item.route}
                  onClick={() => handleSelectedPage(item.id)}
                  className={`${styles["header-nav-link"]} ${
                    activePage === item.id ? styles["active"] : ""
                  }`}
                >
                  {item.text}
                  <span className={styles["header-link-indicator"]}></span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles["header-logo-container"]}>
          <Link href="/" onClick={closeMenu}>
            <div className={styles["header-logo"]}>
              <Image
                src="/assets/logos/logo.png"
                alt="לוגו"
                width={130}
                height={40}
                priority
              />
            </div>
          </Link>
        </div>
      </div>

      <div
        className={`${styles["mobile-menu-wrapper"]} ${
          isMenuOpen ? styles["active"] : ""
        }`}
      >
        <div className={styles["mobile-menu"]}>
          <button
            className={styles["mobile-menu-close"]}
            onClick={toggleMenu}
            aria-label="סגור תפריט"
          >
            <BurgerClose />
          </button>

          <div className={styles["mobile-menu-logo"]}>
            <Image
              src="/assets/logos/logo.png"
              alt="לוגו"
              width={120}
              height={40}
            />
          </div>

          <nav className={styles["mobile-menu-nav"]}>
            <ul className={styles["mobile-menu-list"]}>
              {menuItems.map((item, index) => (
                <li
                  key={index}
                  className={styles["mobile-menu-item"]}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Link
                    href={item.route}
                    className={`${styles["mobile-menu-link"]} ${
                      activePage === item.id ? styles["active"] : ""
                    }`}
                    onClick={() => handleSelectedPage(item.id)}
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div
          className={styles["mobile-menu-backdrop"]}
          onClick={toggleMenu}
        ></div>
      </div>
    </header>
  );
}

export default Header;

// "use client"
// import React, { useState } from "react";
// import Burger from "@/svg/header/burger";
// import BurgerClose from "@/svg/menu/burger-close";
// import Image from "next/image";
// import Link from "next/link";
// import styles from "./index.module.scss";

// /* Example menu data fetched from API */
// const menuList = [
//   { text: "דף הבית", route: "/" },
//   { text: "תחומי עיסוק", route: "/design-system" },
//   { text: "שומות לדוגמא", route: "/form" },
//   { text: "אודות", route: "/form" },
//   { text: "המלצות", route: "/form" },
// ];

// function Header() {
//   // State for managing the menu open/close status
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   // Toggles the menu open/close state
//   const toggleMenu = () => {
//     setIsMenuOpen((prevState) => !prevState);
//   };

//   // Generates navigation links based on the menu list
//   const renderNavLinks = () => {
//     return menuList.map((item, index) => (
//       <Link
//         href={item.route}
//         key={index}
//         className={styles["item"]}
//         onClick={toggleMenu} // Closes menu when a link is clicked
//       >
//         <h4 className={styles["item-text"]}>{item.text}</h4>
//       </Link>
//     ));
//   };

//   // Determines active class for menu visibility
//   const menuActiveClass = isMenuOpen ? styles["active"] : "";

//   return (
//     <header className={styles["wrapper"]}>
//       <div className={styles["header"]}>
//         <button className={styles["burger"]} onClick={toggleMenu}>
//           <Burger />
//         </button>

//         <div className={`${styles["menu-wrapper"]} ${menuActiveClass}`}>
//           <div className={styles["menu"]}>
//             <div className={styles["menu-logo-container"]}>
//               <Image src="/assets/logos/logo.png" alt="" fill />
//             </div>

//             <nav className={styles["nav"]}>{renderNavLinks()}</nav>

//             <button className={styles["close-x"]} onClick={toggleMenu}>
//               <BurgerClose />
//             </button>
//           </div>
//           <div className={styles["backdrop"]} onClick={toggleMenu}></div>
//         </div>
//       </div>
//     </header>
//   );
// }

// export default Header;
