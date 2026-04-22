"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Блокування скролу при відкритому меню
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  // const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Логотип */}
        <Link href="/" className={styles.logo}>
          {/* <span>[</span> IY <span>]</span> */}
          <Image
            src="/svg/my-logo.svg"
            alt="Iryna Yermak Logo"
            width={150} // Підберіть потрібну ширину
            height={50} // Підберіть потрібну висоту
            priority // Логотип — це важливий елемент, завантажуємо його першим
            className={styles.logoImage}
          />
        </Link>

        {/* Навігація */}
        <nav className={`${styles.nav} ${isMenuOpen ? styles.navActive : ""}`}>
          <Link
            // href="#about"
            href="#about"
            className={styles.navLink}
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="#skills"
            className={styles.navLink}
            onClick={() => setIsMenuOpen(false)}
          >
            Skills
          </Link>
          <Link
            href="/experience"
            className={styles.navLink}
            onClick={() => setIsMenuOpen(false)}
          >
            Experience
          </Link>
          <Link
            href="#study"
            className={styles.navLink}
            onClick={() => setIsMenuOpen(false)}
          >
            Study
          </Link>
          {/* Кнопка резюме */}
          <a
            className={styles.navLink}
            href="/IRYNA_YERMAK_FRONTEND_DEVELOPER_CV.pdf"
            download
          >
            Download my CV
          </a>
        </nav>

        {/* Соцмережі */}
        <div className={styles.socials}>
          <Link
            href="https://github.com/IrynaYermak"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <svg width="24" height="24" className={styles.socialIcon}>
              <use href="/icons.svg#icon-github"></use>
            </svg>
          </Link>
          <Link
            href="https://www.linkedin.com/in/iryna-yermak/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <svg width="24" height="24" className={styles.socialIcon}>
              <use href="/icons.svg#icon-linkedin"></use>
            </svg>
          </Link>
          {/*  ThemeToggle) */}
          <ThemeToggle />
        </div>

        {/* Кнопка гамбургер (мобільна) */}
        <button
          type="button"
          className={styles.burger}
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            stroke="var(--text-main)"
            strokeWidth="2"
          >
            {isMenuOpen ? (
              <path d="M6 6L24 24M6 24L24 6" /> // Хрестик
            ) : (
              <path d="M4 7H26M4 15H26M4 23H26" /> // Гамбургер
            )}
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
