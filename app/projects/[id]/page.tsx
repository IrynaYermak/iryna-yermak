"use client";

import { useEffect, useState, useCallback } from "react";
import { useParams, notFound } from "next/navigation";
import Image from "next/image";
import axios from "axios";
import Project from "@/types/Project";
import Button from "@/components/Button/Button";
import styles from "./ProjectDetail.module.css";
import Loader from "@/components/Loader/Loader";

const ProjectDetailPage = () => {
  const { id } = useParams();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchProject = useCallback(async () => {
    try {
      setLoading(true);
      const res = await axios.get<Project[]>("/api/projects");
      const found = res.data.find((p) => p._id === id);
      setProject(found || null);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchProject();
  }, [fetchProject]);

  if (loading) return <Loader />;
  if (!project) return notFound();

  const {
    title,
    category,
    fullDescription,
    imageUrl,
    features,
    techStack,
    liveUrl,
    githubUrl,
    challenges,
    solutions,
  } = project;

  return (
    <article className="container">
      <div className={styles.topNavigation}>
        <Button href="/projects" variant="outline">
          ← Back to Projects
        </Button>
      </div>

      <div className={styles.header}>
        <span className={styles.categoryBadge}>{category}</span>
        <h1 className="sectionTitle">{title}</h1>
      </div>

      <div className={styles.mainImageWrapper}>
        <div className={styles.imageContainer}>
          <Image
            src={imageUrl || "/projects/placeholder.png"}
            alt={title}
            width={500}
            height={500}
            priority
            className={styles.projectImage}
            sizes="(max-width: 500px) 100vw, 500px"
          />
        </div>
      </div>

      <section className={styles.aboutSection}>
        <h2>About Project</h2>
        <p className={styles.descriptionText}>{fullDescription}</p>
      </section>

      <div className={styles.gridContainer}>
        <section className={`${styles.card} ${styles.featuresCard}`}>
          <h3>Key Features</h3>
          <ul className={styles.featureList}>
            {features.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        </section>

        <aside className={`${styles.card} ${styles.techCard}`}>
          <h3>Stack & Links</h3>
          <div className={styles.tags}>
            {techStack.map((t) => (
              <span key={t} className={styles.techTag}>
                {t}
              </span>
            ))}
          </div>
          <div className={styles.ctaGroup}>
            <Button href={liveUrl} variant="yellow">
              Live Demo
            </Button>
            <Button href={githubUrl} variant="outline">
              Source Code
            </Button>
          </div>
        </aside>

        <section className={`${styles.card} ${styles.qaCard}`}>
          <div className={styles.qaItem}>
            <h4>The Challenge</h4>
            <p>{challenges}</p>
          </div>
          <hr className={styles.divider} />
          <div className={styles.qaItem}>
            <h4>The Solution</h4>
            <p>{solutions}</p>
          </div>
        </section>
      </div>
    </article>
  );
};

export default ProjectDetailPage;
