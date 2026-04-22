import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="sectionTitle">About Me</h2>

        <div className={styles.aboutGrid}>
          {/* Права частина: Зображення або стилізований блок */}
          <div className={styles.imageSide}>
            <div className={styles.imageFrame}>
              {/* <Image
                  src="/images/about-photo.jpg" // Замініть на ваше реальне фото або ще один ескіз
                  alt="Iryna Yermak"
                  width={400}
                  height={450}
                  className={styles.aboutImage}
                  style={{ width: "100%", height: "auto" }}
                /> */}
            </div>
          </div>

          {/* Ліва частина: Текст */}
          <div className={styles.textSide}>
            <div className={styles.textContent}>
              <p>
                I’m a junior front-end developer with a background in teamwork,
                client service, and problem-solving. I enjoy creating clean,
                user-friendly interfaces and I adapt quickly to new tools and
                technologies. I actively use AI tools to speed up development,
                analyse information, and improve the quality of my code.
              </p>
              <p>
                My core skills include
                <span className={styles.highlight}>
                  HTML, CSS, JavaScript, React and Next.js
                </span>
                . I’m currently looking for a
                <span className={styles.highlight}>Junior React Developer</span>
                role and I’m also open to apprenticeship opportunities where I
                can grow my skills and gain real industry experience.
              </p>
            </div>

            {/* Додаткова інформація */}
            <ul className={styles.infoList}>
              <li className={styles.infoItem}>
                Comfortable in dynamic environments
              </li>

              <li className={styles.infoItem}>
                Not afraid of challenges and always ready to take initiative
              </li>
              <li className={styles.infoItem}>Lifelong Learner</li>
              <li className={styles.infoItem}>Based in Europe</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
