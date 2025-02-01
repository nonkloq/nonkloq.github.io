import styles from "@/styles/homepage.module.css";

export default function About() {
  return (
    <section id="about" className={styles.aboutDiv}>
      <p>
        {
          "I'm a final student pursuing B.Tech in AI and Data Science from Chennai, India. My focus areas include Machine Learning, Data Science, Deep Learning, and Software Engineering. I am deeply passionate about these fields and actively pursuing knowledge and opportunities within them."
        }
      </p>
    </section>
  );
}

