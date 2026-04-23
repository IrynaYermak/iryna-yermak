import styles from "./Skills.module.css";

const Skills = () => {
  const skillGroups = [
    {
      title: "Core Stack",
      skills: [
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "TanStack (Query)",
        "Zustand",
      ],
    },
    {
      title: "Backend & DB",
      skills: ["Node.js", "Express.js", "Mongoose", "MongoDB", "REST API"],
    },
    {
      title: "Markup & Styling",
      skills: ["HTML5", "CSS3", "CSS Modules", "Responsive Design"],
    },
    {
      title: "Tools & Cloud",
      skills: [
        "Git",
        "GitHub",
        "Vercel",
        "Vite",
        "VS Code",
        "Render",
        "Trello",
        "LLM (AI Tools)",
      ],
    },
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="sectionTitle">My Tech Stack</h2>

        <div className={styles.skillsGrid}>
          {skillGroups.map((group, index) => (
            <div key={index} className={styles.skillCard}>
              <h3 className={styles.categoryTitle}>{group.title}</h3>
              <div className={styles.tagContainer}>
                {group.skills.map((skill) => (
                  <span key={skill} className={styles.tag}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}

          {/* Картка з правами водія (як цікава деталь) */}
          <div className={`${styles.skillCard} ${styles.bonusCard}`}>
            <h3 className={styles.categoryTitle}>Other</h3>
            <div className={styles.tagContainer}>
              <span className={styles.tag}>Full clean Driving licence</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
