"use client";

import { useEffect } from "react";
import Button from "@/components/Button/Button";
import styles from "./Error.module.css";

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    // Логуємо тільки в розробці, щоб не "світити" зайвим у продакшні
    if (process.env.NODE_ENV === "development") {
      console.error("Debug Error Info:", error);
    }
  }, [error]);

  return (
    <section className="container">
      <div className={styles.errorWrapper}>
        <h1 className="sectionTitle">Something went wrong</h1>

        <div className={styles.contentCard}>
          <p className={styles.text}>
            Oops! Our server is having a bit of a moment. <br />
            Please try refreshing the page or head back to the safe zone.
          </p>

          <div className={styles.actions}>
            <Button onClick={() => reset()} variant="yellow">
              Try Again
            </Button>
            <Button href="/" variant="outline">
              Return Home
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
