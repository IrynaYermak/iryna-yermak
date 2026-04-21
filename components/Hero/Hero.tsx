import Image from "next/image";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={`${styles.heroSection} container`}>
      <div className={styles.content}>
        <span className={styles.codeTag}>&lt;frontend_developer /&gt;</span>
        <h1 className={styles.title}>
          Iryna <span>Yermak</span>
        </h1>
        <p className={styles.subtitle}>Junior Frontend Developer</p>
        <button type={"button"} className={styles.ctaButton}>
          Дивитися роботи
        </button>
      </div>

      <div className={styles.imageWrapper}>
        <Image
          src="/images/hero-image.png"
          alt="Iryna Yermak Portfolio Sketch"
          width={550}
          height={550}
          priority
          className={styles.sketchImage}
        />
      </div>
    </section>
  );
};

export default Hero;
