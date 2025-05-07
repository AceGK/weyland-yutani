"use client";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import Logo from "../../assets/logos/weyland-yutani.svg";
import MenuButton from "../../assets/icons/bars-minimal.svg";
import Chevron from "../../assets/icons/chevron-down.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Nav: React.FC = () => {
  const pathname = usePathname();
  const [showLogo, setShowLogo] = useState(pathname !== "/");
  const [scrollUp, setScrollUp] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [suppressScrollCheck, setSuppressScrollCheck] = useState(false);

  useEffect(() => {
    const handleHashChangeStart = () => {
      setSuppressScrollCheck(true);
      setTimeout(() => setSuppressScrollCheck(false), 1000);
    };

    if (pathname !== "/" || pathname.includes("#")) {
      setShowLogo(true);
    }

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const halfScreen = window.innerHeight * 0.5;
      const triggerPoint = window.innerHeight * 1.1;

      if (pathname !== "/") {
        setShowLogo(true);
      } else {
        setShowLogo(currentScrollY > halfScreen);
        console.log(pathname);
      }

      if (!suppressScrollCheck) {
        setScrollUp(
          currentScrollY < lastScrollY || currentScrollY < triggerPoint
        );
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("hashchange", handleHashChangeStart, true);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("hashchange", handleHashChangeStart, true);
    };
  }, [lastScrollY, suppressScrollCheck, pathname]);

  useEffect(() => {
    // Show logo immediately if URL has a hash
    if (typeof window !== "undefined" && window.location.hash) {
      setShowLogo(true);
    }
  }, []);

  return (
    <>
      <div
        className={`${styles.nav} ${
          scrollUp ? styles.visible : styles.hidden
        } ${showLogo ? styles.showLogo : ""}`}
      >
        <div className={styles.left}>
          <div className={styles.dropdown}>
            <button
              className={styles.dropdownToggle}
              onClick={() => setIsDropdownOpen((prev) => !prev)}
              aria-expanded={isDropdownOpen}
              aria-controls="aboutDropdown"
            >
              about
              <Chevron
                className={`${styles.chevron} ${
                  isDropdownOpen ? styles.open : ""
                }`}
              />
            </button>
            {isDropdownOpen && (
              <div className={styles.dropdownMenu} id="aboutDropdown">
                {[
                  { label: "Our Mission", href: "/#our-mission" },
                  { label: "Engineering", href: "/#engineering" },
                  { label: "Exploration", href: "/#exploration" },
                  { label: "Terraforming", href: "/#terraforming" },
                ].map(({ label, href }) => (
                  <a
                    key={href}
                    href={href}
                    onClick={() => {
                      setIsDropdownOpen(false);
                      setShowLogo(true);
                      setScrollUp(true);
                    }}
                  >
                    {label}
                  </a>
                ))}
              </div>
            )}
          </div>
          <a href="/#technology">technology</a>
        </div>

        <Link
          href="/"
          className={`${styles.center} ${showLogo ? styles.centerVisible : ""}`}
        >
          <Logo />
        </Link>

        <div className={styles.right}>
          <a href="/news">news</a>
          <a href="/#contact">contact</a>
        </div>

        <button
          className={styles.menuButton}
          onClick={() => setIsMenuOpen(true)}
          aria-label="Open menu"
        >
          <MenuButton />
        </button>
      </div>

      {isMenuOpen && (
        <div className={styles.modalNav} aria-hidden={!isMenuOpen}>
          <button
            className={styles.closeButton}
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          >
            ✕
          </button>
          <nav className={styles.modalMenu}>
            <a href="#our-mission" onClick={() => setIsMenuOpen(false)}>
              Mission
            </a>
            <a href="#technology" onClick={() => setIsMenuOpen(false)}>
              Technology
            </a>
            <a href="#news" onClick={() => setIsMenuOpen(false)}>
              News
            </a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)}>
              Contact
            </a>
          </nav>
        </div>
      )}
    </>
  );
};

export default Nav;
