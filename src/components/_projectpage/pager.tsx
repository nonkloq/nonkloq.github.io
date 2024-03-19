import { Project } from "@/types"
import { useState } from "react";
import ImageSlider from '@/components/_projectpage/imageslider';
import styles from '@/styles/pager.module.css';
import Markdown from "react-markdown";
import ProjectLinks from "@/components/_projectpage/projectlinks";

export default function Pager(props: {
    project: Project,
    checkIndex: (direction: -1 | 1) => number | null, 
}){

    const [currentImageIdx, setCurrentImageIdx] = useState<number>(0);
    const  n = props.project.images.length;

    const switchImage = (index: number) => {
        setCurrentImageIdx((index+n)%n);
    }
    
    const left = props.checkIndex(1); // dates are in ascending order -1 -> 1
    const right = props.checkIndex(-1); // ...  1 -> -1

    const goToDir = (direction: 'l' | 'r' | 'e') => {
        switch (direction){
            case 'l':
                if (left!==null) {
                    setCurrentImageIdx(0);
                    window.location.hash = `${left}`;
                }
                break;
            case 'r':
                if (right!==null){
                    setCurrentImageIdx(0);
                    window.location.hash = `${right}`;
                }
                break;
            default:
                window.location.hash = '';
        }
        
    }

    const handleKeydown = (event: React.KeyboardEvent<HTMLDivElement>) => {
        
        if (event.key.toLowerCase() === 'q') goToDir('e');
        else if (event.key === 'ArrowLeft') goToDir('l')
        else if (event.key === 'ArrowRight') goToDir('r');
    }



    return <div className={styles.pagerMainDiv} onKeyDown={handleKeydown} tabIndex={0}>
        <div className={styles.navBar} >
            <span onClick={()=>goToDir('e')}>EXIT</span>    
            
            <div className={styles.arrowContainer}>
            <div className = {styles.leftButton} onClick={() => {goToDir('l')}}>
                {left!==null && <em></em>}
            </div> 
                
            <div className = {styles.rightButton} onClick={() => {goToDir('r')}}>
                {right!=null && <em></em>}                
            </div>

            </div>
        </div>

        <div className={styles.pagerBody}>
        <div  className={styles.pagerContent}>

        <article>
            <header>
                <h1>{props.project.name}</h1>
                <p>{props.project.shortDescription}</p>
                <ProjectLinks 
                    links={props.project.links}
                    classname={styles.projectLinksDiv}
                />
            </header>

            <ImageSlider 
                    isManyImg = {props.project.images.length > 1}
                    image={props.project.images[currentImageIdx]}
                    totalImages={n}
                    setImage={switchImage}
                    index={currentImageIdx}
                >

            </ImageSlider>

           <section>
            <h2>About</h2>
            <div className={styles.contentDiv}>
                <Markdown>{props.project.content}</Markdown>            
            </div>
           </section>

           <section>
            <h2>Toolbox</h2>
            <small>Programming Languages, Frameworks, Libraries, Tools & Technologies used in this project</small>
            <div className={`${styles.contentDiv} ${styles.skillsContainer}`}>
                { props.project.skills.map((skill, idx) => (
                    <span key={idx}>{skill}</span>
                ))}
            </div>
           </section>

           <section>
            <h2>Links</h2>

            <div className={styles.contentDivLi}>
                <ul>
                {Object.entries(props.project.links).map(([key, link]) => (
                    <li key={key+'ref'}>
                        {key.charAt(0).toUpperCase() + key.slice(1)}: <a href={link} target="_blank">{link}</a>
                    </li>
                    ))}
                </ul>
            </div>

           </section>

        </article>
        </div>
        </div>

    </div>

}