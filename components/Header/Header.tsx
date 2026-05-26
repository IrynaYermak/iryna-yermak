"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Skills", href: "/#skills" },
    { name: "Experience", href: "/#experience" },
    { name: "Projects", href: "/projects" },
  ];

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Логотип */}
        <Link href="/" className={styles.logo}>
          <Image
            src="/svg/my-logo.svg"
            alt="Iryna Yermak Logo"
            width={150}
            height={50}
            priority
            className={styles.logoImage}
          />
        </Link>

        {/* nav */}
        <nav className={`${styles.nav} ${isMenuOpen ? styles.navActive : ""}`}>
          <div className={styles.mobileSocials}>
            <Link
              href="https://github.com/IrynaYermak"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              onClick={() => setIsMenuOpen(false)}
            >
              <svg width="32" height="32" className={styles.socialIcon}>
                <use href="/icons.svg#icon-github"></use>
              </svg>
            </Link>
            <Link
              href="https://www.linkedin.com/in/iryna-yermak/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              onClick={() => setIsMenuOpen(false)}
            >
              <svg width="32" height="32" className={styles.socialIcon}>
                <use href="/icons.svg#icon-linkedin"></use>
              </svg>
            </Link>
          </div>

          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`${styles.navLink} ${isActive ? styles.active : ""}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            );
          })}

          {/*CV */}
          <a
            className={styles.navLink}
            href="/IRYNA_YERMAK_FRONTEND_DEVELOPER_CV.pdf"
            download
          >
            Download my CV
          </a>
        </nav>

        {/* SOCIAL */}
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
              <path d="M6 6L24 24M6 24L24 6" />
            ) : (
              <path d="M4 7H26M4 15H26M4 23H26" />
            )}
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
