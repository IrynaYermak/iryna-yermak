import styles from "./About.module.css";
import Image from "next/image";

export default function About() {
  const softSkills = [
    "Strong communication",
    "Team collaboration",
    "Fast learning",
    "User empathy",
    "Problem solving",
    "Time management",
    "High adaptability",
    "Attention detail",
    "Proactive attitude",
    "Reliable delivery",
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="sectionTitle">About Me</h2>

        <div className={styles.aboutGrid}>
          {/* Права частина: Зображення або стилізований блок */}
          <div className={styles.imageSide}>
            <div className={styles.imageFrame}>
              <Image
                src="/images/about.png"
                alt="Iryna Yermak"
                width={400}
                height={450}
                className={styles.aboutImage}
                loading="eager"
                style={{ width: "100%", height: "auto" }}
              />
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
              {softSkills.map((skill, index) => (
                <li className={styles.infoItem} key={index}>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
