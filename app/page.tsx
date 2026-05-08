// import Image from "next/image";
// import styles from "./page.module.css";
import About from "@/components/About/About";
import Education from "@/components/Education/Education";
import Hero from "@/components/Hero/Hero";
import Skills from "@/components/Skills/Skills";
import WorkExperience from "@/components/WorkExperience/WorkExperience";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Education />
      <WorkExperience />
    </>
  );
}
