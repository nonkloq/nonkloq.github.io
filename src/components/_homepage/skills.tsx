import styles from '@/styles/homepage.module.css';
import skillsJSON from '@/../_content/skills.json';

export default function Skills() {


    return (
        <section id='skills' className={styles.skillsDiv}>
            {Object.entries(skillsJSON).map(([skill, data]) => (
                
                data.link === '' ? <span key={skill}
                style={{
                    borderColor: data.color, 
                    color: data.color,
                    background: `linear-gradient(to right, ${hexToRGBA(lightenColor(data.color, -80),.3)} ${data.level * 10}%, transparent ${data.level * 10}%)`,
                }}
                >

                    {skill}
                </span>
                
                : <a 
                    key={skill} 
                    href={data.link} 
                    target='_blank' 
                    style={{
                        borderColor: data.color, 
                        color: data.color,
                        background: `linear-gradient(to right, ${hexToRGBA(lightenColor(data.color, -80),.3)} ${data.level * 10}%, transparent ${data.level * 10}%)`,
                    }}
                >
                    {skill}
                </a>


            ))}
        </section>
    );
}

function lightenColor(color: string, amount: number) {
    return color.replace(/[\da-fA-F]{2}/g, match => {
        const num = parseInt(match, 16) + amount;
        const adjustedNum = Math.min(255, num);
        return adjustedNum.toString(16).padStart(2, '0');
    });
}

function hexToRGBA(hex: string, alpha: number) {
    let r = 0, g = 0, b = 0;


    r = parseInt(hex.slice(1, 3), 16);
    g = parseInt(hex.slice(3, 5), 16);
    b = parseInt(hex.slice(5, 7), 16);

    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}