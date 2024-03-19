import Image from "next/image"
import styles from "@/styles/prholder.module.css";
import { useState } from "react";
import React from "react";


const ProjectHolder= (
    props: {
        name: string, 
        duration: string,
        image_src: string,
        skills: string[],
        shortDescription: string,
        projectKey: number,
    }
) => {
    
    // To show only the first n skills used
    let n = 5;
    const skillsSpans = new Array<JSX.Element>();

    for (let i = 0; i < n && i < props.skills.length; i++) {
        skillsSpans.push(
            <span key={i}>{props.skills[i]}</span>
        )
    }

    if (n<props.skills.length) {
        skillsSpans.push(
            <span key={"final"} className={styles.lastSpan}>{"& more..."}</span>
        )
    }

    return <a 
            className={styles.projectHolder} 
            href={`#${props.projectKey}`}>

                <div  className={styles.Image}>
                <Image src={props.image_src} alt="da first image" 
                fill 
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={true}
                unoptimized={true}
                />
                </div>
                <span className={styles.prtitle}>{props.name}</span>
                <span className={styles.prduration}>{props.duration}</span>
        

            <div className={styles.overlayDiv}>
                <span className={styles.ovdTitle}>{props.shortDescription}</span>
                <div  className={styles.ovdSkills}>{skillsSpans}</div>
            </div>            
            
        </a>


}
export default React.memo(ProjectHolder);
