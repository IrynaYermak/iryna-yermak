import styles from "./Education.module.css";

const Education = () => {
  return (
    <section id="education" className="section">
      <div className="container">
        <h2 className="sectionTitle">Education & Interests</h2>

        <div className={styles.grid}>
          {/* Ліва колонка: Освіта */}
          <div className={styles.timeline}>
            <div className={styles.eduItem}>
              <span className={styles.date}>Mar 2025 - Apr 2026</span>
              <h3 className={styles.degree}>Full-stack Developer</h3>
              <p className={styles.university}>
                IT Training Centre GoIT (Online), Ukraine
              </p>
            </div>

            <div className={styles.eduItem}>
              <span className={styles.date}>Sep 2011 - Jun 2012</span>
              <h3 className={styles.degree}>
                Master’s Degree in Economics of Enterprise
              </h3>
              <p className={styles.university}>
                KROK University of Economics and Law, Kyiv, Ukraine
              </p>
              <p style={{ fontSize: "0.8rem", marginTop: "4px" }}>
                (NFQ Level 9 Equivalent)
              </p>
            </div>
          </div>

          {/* Права колонка: Хобі */}
          <div className={styles.hobbiesSide}>
            <div className={styles.hobbyCard}>
              <h3 className={styles.hobbyTitle}> Baking</h3>
              <p style={{ fontSize: "0.9rem" }}>
                Festive treats, Easter pastries, and special occasion cakes.
              </p>
            </div>

            <div className={styles.hobbyCard}>
              <h3 className={styles.hobbyTitle}> Hiking</h3>
              <p style={{ fontSize: "0.9rem" }}>
                Exploring scenic trails and peaceful nature landscapes.
              </p>
            </div>

            <div className={styles.hobbyCard}>
              <h3 className={styles.hobbyTitle}> Embroidery</h3>
              <p style={{ fontSize: "0.9rem" }}>
                Creating detailed and meaningful handmade pieces.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
