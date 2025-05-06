"use client";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import MenuIcon from "../../assets/icons/bars-light.svg";

const Nav: React.FC = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY) {
        setShow(true); // scrolling up
      } else {
        setShow(false); // scrolling down
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div className={`${styles.nav} ${show ? styles.visible : styles.hidden}`}>
      <button className={styles.mobileMenuButton} aria-label="Menu">
      <MenuIcon />
      </button>
    </div>
  );
};

export default Nav;
