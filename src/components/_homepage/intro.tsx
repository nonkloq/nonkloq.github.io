import styles from "@/styles/homepage.module.css";

export default function Intro() {
  return (
    <section id="intro" className={styles.introDiv}>
      <h1>{"Hi,"}</h1>
      <span>
        <h6>{"I'm "}</h6>
        <h3>{"Sathish Kumaran"}</h3>
      </span>
      <h4>{"Developer | AI & Data Science"}</h4>
    </section>
  );
}
