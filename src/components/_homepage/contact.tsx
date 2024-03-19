import email from '@/../_content/email.json';
import styles from '@/styles/homepage.module.css';


export default function Contact() {
    return <section id='contact' className={styles.contactDiv}>

    <p>Send me an email at</p> <a href={`mailto:${email}`} className={styles.emailLink}><h3>{email}</h3></a> <p>{'or drop a "Hii" in my DMs.'}</p>
    

    <a href='/resume.pdf' className={styles.resumeBtn} target='_blank' rel="noopener noreferrer">View My Resume</a>
</section>
}