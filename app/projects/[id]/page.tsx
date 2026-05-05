"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import axios from "axios";
import Project from "@/types/Project";
import Button from "@/components/Button/Button";
import styles from "./ProjectDetail.module.css";

const ProjectDetailPage = () => {
  const { id } = useParams();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const res = await axios.get<Project[]>("/api/projects");
        const found = res.data.find((p) => p._id === id);
        setProject(found || null);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProject();
  }, [id]);

  if (loading) return <div className={styles.statusMessage}>Loading...</div>;
  if (!project)
    return <div className={styles.statusMessage}>Project not found.</div>;

  return (
    <article className={`${styles.pageWrapper} container`}>
      <div className={styles.backBtnWrapper}>
        <Button href="/projects" variant="outline">
          ← Back to Projects
        </Button>
      </div>

      <header className={styles.header}>
        <span className={styles.category}>{project.category}</span>
        <h1 className={styles.title}>{project.title}</h1>
      </header>

      {/* Контейнер зображення тепер має стабільну висоту для десктопа */}
      <div className={styles.mainImageWrapper}>
        <div className={styles.imageContainer}>
          <Image
            src={project.imageUrl || "/projects/placeholder.png"}
            alt={project.title}
            width={500}
            height={500}
            priority
            className={styles.projectImage}
            sizes="(max-width: 500px) 100vw, 500px"
          />
        </div>
      </div>

      <div className={styles.layout}>
        <section className={styles.section}>
          <h2>About Project</h2>
          <p className={styles.description}>{project.fullDescription}</p>
        </section>

        <section className={styles.section}>
          <h2>🎯 Key Features</h2>
          <ul className={styles.featuresList}>
            {project.features.map((feature, index) => (
              <li key={index} className={styles.featureItem}>
                {feature}
              </li>
            ))}
          </ul>
        </section>

        <section className={styles.qaSection}>
          <div className={styles.challengeBlock}>
            <h3>🚧 The Challenge</h3>
            <p>{project.challenges}</p>
          </div>
          <div className={styles.solutionBlock}>
            <h3>💡 The Solution</h3>
            <p>{project.solutions}</p>
          </div>
        </section>

        <aside>
          <div
            className={styles.infoCard}
            style={{
              border: "3px solid var(--text-main)",
              borderRadius: "24px",
              padding: "30px",
            }}
          >
            <h3>Tech Stack</h3>
            <div className={styles.techList}>
              {project.techStack.map((tech) => (
                <span key={tech} className={styles.techTag}>
                  {tech}
                </span>
              ))}
            </div>

            <div className={styles.actions}>
              <Button href={project.liveUrl} variant="yellow">
                View Live Demo
              </Button>
              <Button href={project.githubUrl} variant="outline">
                Browse Source Code
              </Button>
            </div>
          </div>
        </aside>
      </div>
    </article>
  );
};

export default ProjectDetailPage;
