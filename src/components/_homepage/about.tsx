import styles from "@/styles/homepage.module.css";

export default function About() {
  return (
    <section id="about" className={styles.aboutDiv}>
      <p>
        {
          "I'm a graduate with a B.Tech in Artificial Intelligence and Data Science from Chennai, India. My focus areas include Machine Learning, Data Science, Deep Learning, and Software Engineering."
        }
      </p>
    </section>
  );
}
