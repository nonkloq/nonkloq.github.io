'use client';
import { Experience } from '@/types';
import { useState } from 'react';
import styles from '@/styles/expv.module.css';
import Markdown from 'react-markdown';

export default function ExperienceArray(props: {
    exparr: Experience[]
}){
    const {exparr} = props;
    const [activeItem, setActiveItem] = useState<number>(-1); //((exparr.length === 1) ? 0 : -1);


    return <>
        {
            (activeItem === -1) ?
            <div className={styles.expListContainer}>
            {
                exparr.map((exp, index) => {
                    return <div key = {`exp${index}`} className={styles.expContainer}>
                                <div className={styles.expContainerLeft}>
                                    <span className={styles.expTitle}>{exp.title}<a href={exp.link} target='_blank'>{` @ ${exp.company}`}</a> </span>
                                    <span className={styles.expDuration}>{exp.range}</span>
                                </div>
                                <span className={styles.expMaxMin} onClick={() => setActiveItem(index)}>+</span>
                            </div>
                })                
                }
            </div>
            :
            <div className={styles.expViewContainer}>
                <div className={styles.expContainer}>
                    <div className={styles.expContainerLeft}>
                        <span className={styles.expTitle} >{exparr[activeItem].title}<a href={exparr[activeItem].link} target='_blank'>{` @ ${exparr[activeItem].company}`}</a> </span>
                        <span className={styles.expDuration}>{exparr[activeItem].range}</span>
                    </div>    
                    <span className={styles.expMaxMin} onClick={() => setActiveItem(-1)}>{"×"}</span>
                </div>

                <div className={styles.contentDiv}>

                <Markdown>{exparr[activeItem].content}</Markdown>

                </div>

                <div className={styles.skillUsed}>
                    {exparr[activeItem].skills.map((skill, idx) => (
                        <span key={idx}>{skill}</span>
                    ))}
                </div>
 
            </div>
        }

    </>;
}