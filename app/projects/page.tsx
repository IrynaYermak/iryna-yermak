"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
// import Link from "next/link";
import axios from "axios"; // Імпортуємо axios
import Button from "@/components/Button/Button";
import styles from "./Projects.module.css";
import Project from "@/types/Project";

const ProjectsPage = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [activeCategory, setActiveCategory] = useState("all");
  const [loading, setLoading] = useState(true);

  // 1. Завантаження даних з API через Axios
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        // В Axios результат запиту лежить у полі .data
        const response = await axios.get("/api/projects");
        setProjects(response.data);
        setFilteredProjects(response.data);
      } catch (error) {
        console.error("Помилка при завантаженні проектів через Axios:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  // 2. Логіка фільтрації (залишається без змін)
  useEffect(() => {
    if (activeCategory === "all") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter((p) => p.category === activeCategory)
      );
    }
  }, [activeCategory, projects]);

  const categories = [
    { id: "all", name: "All" },
    { id: "frontend", name: "Frontend" },
    { id: "fullstack", name: "Full-stack" },
  ];

  if (loading) {
    return (
      <div className={styles.projectsContainer}>
        <h2 className={styles.title}>Loading magic...</h2>
      </div>
    );
  }

  return (
    <main className={styles.projectsContainer}>
      <h1 className={styles.title}>My Creative Work</h1>

      {/* Таби для фільтрації */}
      <div className={styles.tabs}>
        {categories.map((cat) => (
          <button
            key={cat.id}
            className={`${styles.tabBtn} ${
              activeCategory === cat.id ? styles.activeTab : ""
            }`}
            onClick={() => setActiveCategory(cat.id)}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Сітка проектів */}
      <div className={styles.grid}>
        {filteredProjects.map((project) => (
          <article key={project._id} className={styles.card}>
            <div className={styles.imageWrapper}>
              <Image
                src={project.imageUrl || "/projects/placeholder.png"}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className={styles.projectImage}
                loading="eager"
              />
            </div>

            <div className={styles.cardContent}>
              <h2 className={styles.projectTitle}>{project.title}</h2>
              <p className={styles.description}>{project.description}</p>

              <div className={styles.techStack}>
                {project.techStack.map((tech) => (
                  <span key={tech} className={styles.tag}>
                    {tech}
                  </span>
                ))}
              </div>
              <div className={styles.cardFooter}>
                <Button href={`/projects/${project._id}`} variant="yellow">
                  View Details
                </Button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
};

export default ProjectsPage;
