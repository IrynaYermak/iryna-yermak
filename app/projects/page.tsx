"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import Image from "next/image";
import axios from "axios";
import Button from "@/components/Button/Button";
import styles from "./Projects.module.css";
import Project from "@/types/Project";
import Loader from "@/components/Loader/Loader";

const ProjectsPage = () => {
  // throw new Error("Test Crash");
  const [projects, setProjects] = useState<Project[]>([]);
  const [activeCategory, setActiveCategory] = useState("all");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchProjects = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get("/api/projects");
      setProjects(response.data);
    } catch (error) {
      setError("Failed to load projects. Please try again later.");
      console.error("Some error:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const fetchInitialProjects = async () => {
      try {
        const response = await axios.get("/api/projects");
        setProjects(response.data);
        setError(null);
      } catch (error) {
        setError("Failed to load projects. Please try again later.");
        console.error("Some error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchInitialProjects();
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeCategory === "all") {
      return projects;
    }
    return projects.filter((p) => p.category === activeCategory);
  }, [activeCategory, projects]); // Обчислюється автоматично, коли змінюється категорія або список проектів

  const categories = [
    { id: "all", name: "All" },
    { id: "frontend", name: "Frontend" },
    { id: "fullstack", name: "Full-stack" },
  ];

  if (loading) {
    return <Loader />;
  }

  return (
    <section className="container">
      <h1 className={styles.title}>My Projects</h1>
      {/* Filter */}
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
      {error ? (
        <div className={styles.errorBlock}>
          <p>{error}</p>
          <Button
            onClick={() => {
              fetchProjects();
            }}
            variant="yellow"
          >
            Reload Projects
          </Button>
        </div>
      ) : filteredProjects.length === 0 && !loading ? (
        <div className={styles.emptyBlock}>
          <p>No projects found in this category.</p>
        </div>
      ) : (
        <ul className={styles.grid}>
          {filteredProjects.map(
            ({ _id, imageUrl, title, description, techStack }) => (
              <li key={_id} className={styles.card}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={imageUrl || "/projects/placeholder.png"}
                    alt={title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className={styles.projectImage}
                    loading="eager"
                  />
                </div>

                <div className={styles.cardContent}>
                  <h2 className={styles.projectTitle}>{title}</h2>
                  <p className={styles.description}>{description}</p>

                  <div className={styles.techStack}>
                    {techStack.map((tech) => (
                      <span key={tech} className={styles.tag}>
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className={styles.cardFooter}>
                    <Button href={`/projects/${_id}`} variant="yellow">
                      View Details
                    </Button>
                  </div>
                </div>
              </li>
            )
          )}
        </ul>
      )}
    </section>
  );
};

export default ProjectsPage;
