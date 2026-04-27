import Image from "next/image";

export default function Projects() {
  return (
    <>
      <section className="section">
        <div className="container">
          <h1>Projects</h1>
          <p>This is the Projects page of the portfolio.</p>
          <Image
            src="/images/sticker.png"
            alt="Iryna Yermak Portfolio Sketch"
            width={550}
            height={550}
            priority
            // className={styles.sketchImage}
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </section>
    </>
  );
}
