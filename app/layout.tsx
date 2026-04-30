import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter, Fira_Code } from "next/font/google";
import "modern-normalize/modern-normalize.css";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-jakarta",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira",
});
export const metadata: Metadata = {
  metadataBase: new URL("https://iryna-yermak.vercel.app"),
  title: "Iryna Yermak | Junior Frontend Developer",
  description:
    "Frontend developer Iryna Yermak's portfolio. I create clean code and aesthetic interfaces.",
  icons: {
    icon: "/svg/favicon.svg",
    apple: "/svg/favicon.svg",
  },
  openGraph: {
    title: "Iryna Yermak | Junior Frontend Developer",
    description:
      "Frontend developer Iryna Yermak's portfolio. I create clean code and aesthetic interfaces.",
    url: "https://iryna-yermak.vercel.app/",
    siteName: "Iryna Yermak Portfolio",
    images: [
      {
        url: "https://iryna-yermak.vercel.app/images/hero-image.png",
        width: 1200,
        height: 630,
        alt: "Iryna Yermak Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // Специфічні теги для Twitter/Telegram (Telegram часто використовує їх теж)
  twitter: {
    card: "summary_large_image",
    title: "Iryna Yermak | Junior Frontend Developer",
    description: "Frontend Developer portfolio",
    images: ["https://iryna-yermak.vercel.app/images/hero-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${inter.variable}`}
      data-scroll-behavior="smooth"
    >
      <body className="font-inter">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
