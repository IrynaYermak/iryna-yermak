"use client";

import style from "./(site)/page.module.css";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function NotFoundPage() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => router.push("/"), 5000);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <main>
      <div className="section container ">
        <h2>
          404 | Oh! This page is still under construction — just like great
          careers.
        </h2>
        <p>
          No worries — you’ll be redirected to the homepage in a few seconds.
        </p>
      </div>
    </main>
  );
}
