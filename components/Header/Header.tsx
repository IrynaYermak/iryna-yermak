"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";

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
            href="/about"
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
        </nav>

        {/* Соцмережі */}
        <div className={styles.socials}>
          <a
            href="https://github.com/IrynaYermak"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialIcon}
            aria-label="GitHub"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/iryna-yermak/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialIcon}
            aria-label="LinkedIn"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
        </div>

        {/* Кнопка гамбургер (мобільна) */}
        <button
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
