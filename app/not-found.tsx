"use client";

import styles from "./page.module.css";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function NotFoundPage() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => router.push("/"), 5000);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <main className={styles.wrapper}>
      <h1 className={styles.errorCode}>404</h1>

      <h2 className={styles.title}>
        This page is still under construction. Moving you back home...
      </h2>

      <div className={styles.timerBar}>
        <div className={styles.fill}></div>
      </div>
    </main>
  );
}
