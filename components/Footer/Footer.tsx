import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          {/* Колонка 1: Лого та статус */}
          <div className={styles.brandSide}>
            <Link href="/" className={styles.logo}>
              <Image
                src="/svg/my-logo.svg"
                alt="Logo"
                width={150}
                height={50}
                className={styles.logoImg}
              />
            </Link>
            <div className={styles.statusBadge}>● Available for work</div>
            <p style={{ fontSize: "0.9rem", maxWidth: "250px" }}>
              Creating modern interfaces with a love for detail and clean code.
            </p>
          </div>

          {/* Колонка 2: Контакти */}
          <div>
            <h3 className={styles.title}>Contact</h3>
            <ul className={styles.linkList}>
              <li>
                <a href="mailto:1991irenka@gmail.com" className={styles.link}>
                  1991irenka@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+353857615046" className={styles.link}>
                  +353 (85) 761 50 46
                </a>
              </li>
              <li>
                <span className={styles.link}>Based in Europe</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Нижня панель */}
        <div className={styles.bottomBar}>
          <p>© {currentYear} Iryna Yermak. Built with Next.js & Passion.</p>
          {/* Наша пасхалка */}
          <div className={styles.easterEgg} title="Yes, I really like coffee!">
            <span>Done with</span>
            <span className={styles.coffeeIcon}>☕</span>
            <span>and too much</span>
            <span className={styles.highlightCode}>&lt;code /&gt;</span>
          </div>

          <div className={styles.socials}>
            {/* Ті самі іконки, що в хедері */}
            <Link
              href="https://github.com/IrynaYermak"
              target="_blank"
              className={styles.link}
            >
              <svg width="24" height="24" className={styles.socialIcon}>
                <use href="/icons.svg#icon-github"></use>
              </svg>
            </Link>
            <Link
              href="https://www.linkedin.com/in/iryna-yermak/"
              target="_blank"
              className={styles.link}
            >
              <svg width="24" height="24" className={styles.socialIcon}>
                <use href="/icons.svg#icon-linkedin"></use>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
