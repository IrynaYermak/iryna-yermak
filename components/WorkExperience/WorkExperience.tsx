// components/WorkExperience/WorkExperience.tsx
import styles from "./WorkExperience.module.css";

const experienceData = [
  {
    id: 1,
    period: "Mar 2025 - Present",
    role: "Career break to study Software Development",
    company: "Focus: Full-stack Development",
    isStudy: true, // Спеціальний флаг для стилізації
    description: [],
  },
  {
    id: 2,
    period: "Dec 2025 - Dec 2026", // Припустив рік закінчення для логіки
    role: "Fixed Term Auxiliary Postal Operative",
    company: "AnPost, Portlaoise",
    isStudy: false,
    description: [
      "Responsible for efficient mail processing and delivery within a fast-paced logistics environment.",
    ],
  },
  {
    id: 3,
    period: "May 2018 - Mar 2025",
    role: "Sales Department Administrator",
    company: "ACE (Wholesale trade of heating equipment), Ukraine",
    isStudy: false,
    description: [
      "Administered daily sales & handled customer orders (up to 30 per day) via ERP.",
      "Communicated daily with suppliers to ensure on-time deliveries and steady stock levels.",
      "Handled the monthly sales reports to keep the team updated.",
    ],
  },
  {
    id: 4,
    period: "Aug 2011 - Apr 2018",
    role: "Card Services Specialist",
    company: "State Savings Bank of Ukraine (Bank branch), Ukraine",
    isStudy: false,
    description: [
      "Managed salary card transfers for more than 20 companies.",
      "Processed customer applications for credit cards and cash loans.",
      "Handled transfers to service providers on the CBS using BARS software.",
    ],
  },
];

const WorkExperience = () => {
  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="sectionTitle">Work Experience</h2>

        <div className={styles.timeline}>
          {experienceData.map((item) => (
            <div
              key={item.id}
              className={`${styles.card} ${
                item.isStudy ? styles.studyCard : ""
              }`}
            >
              <div className={styles.header}>
                <span className={styles.period}>{item.period}</span>
                <h3 className={styles.role}>{item.role}</h3>
                <h4 className={styles.company}>{item.company}</h4>
              </div>

              {item.description.length > 0 && (
                <ul className={styles.descList}>
                  {item.description.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
