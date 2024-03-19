'use client';
import { Project } from "@/types";
import { useCallback, useEffect, useState} from "react";
import styles from '@/styles/projects.module.css';
import ProjectHolder from "@/components/_projectpage/projectholder";
import Navbar from "@/components/navbar";
import Pager from "@/components/_projectpage/pager";

export default function ProjectsPage(props: {
    projects: Project[],
    uniqueTags: Set<string>
}) {

    
    const [filteredEntries, setFilteredEntries] = useState<number[]>(Array.from({ length: props.projects.length }, (_, index) => index));
    const [activeTag, setActiveTag] = useState<string>("");
    
    // Selected Project
    const [activeProject, setActiveProject] = useState<number>(-1);

    const changeKeybyHash = useCallback ((keyStr: string) => {
        keyStr = keyStr.substring(1);
        
        const newIDX = parseInt(keyStr);
        // If newIDX is a number and it is with the the range
        if (!isNaN(newIDX) && (newIDX >= 0 && newIDX<props.projects.length)) {
            setActiveProject(newIDX);
            window.scrollTo({top: 0})
        } else setActiveProject(-1);
    },[setActiveProject, props.projects.length])

    useEffect(() => {

        const handleHashChange = () => {
            changeKeybyHash(window.location.hash);
        };
        window.addEventListener('hashchange', handleHashChange);
        handleHashChange();
        return () => {
          window.removeEventListener('hashchange', handleHashChange);
        };
      }, [changeKeybyHash]);


    /** Logic to filter the projects by given tag */
    const filterbyTag = (tag: string) => {
        setActiveTag(tag);
        if (tag === "") {
            setFilteredEntries(Array.from({ length: props.projects.length }, (_, index) => index));
            return;
        }
    
        let filtered = new Array<number>();

        props.projects.forEach((project, index) => {
            if (project.tags.indexOf(tag) !== -1)  filtered.push(index);
        })
        setFilteredEntries(filtered);
    }
  
    /** Check if there is project exist in given index */
    const pagerHelper = (direction: -1 | 1) => {
        let newIdx = filteredEntries.indexOf(activeProject)
        if (newIdx === -1) return null;
        newIdx += direction; // To reverse the direction

        + direction;
        if (newIdx <0 || newIdx>=filteredEntries.length) return null;

        return filteredEntries[newIdx];
    }

    /** Tag JSX[] */
    const tagsJsx = [<span key={'all'} className={activeTag == "" ? styles.activeTag: ""} onClick={()=>filterbyTag("")}>SHOW ALL</span>];
    props.uniqueTags.forEach( tag => {
        tagsJsx.push(
            <span key={tag} className={activeTag == tag ? styles.activeTag: ""} onClick={()=>filterbyTag(tag)}>{tag}</span>
        )
    })

    return (
        <main>
        {activeProject === -1 ? (

            <>
            <Navbar to_path="/" name="Home"/>
            <div className={styles.projectMainDiv}>
            <h2>My Projects,</h2>
            <div className={styles.filterTags }>
                {tagsJsx}
            </div>
            <hr/>
            <div className={styles.projectsGrid}>
            {filteredEntries.map((_, arrindex) => {
                const index = filteredEntries[filteredEntries.length - 1 - arrindex];
     
                return (
                    <ProjectHolder
                        key={index}
                        name={props.projects[index].name}
                        duration={props.projects[index].range}
                        image_src={props.projects[index].images[0]}
                        shortDescription={props.projects[index].shortDescription}
                        skills={props.projects[index].skills}
                        projectKey={index}
                    />
                );
            })}
               
            </div>
            </div>
            </>
        ) : <Pager 
            project={props.projects[activeProject]} 
            checkIndex={pagerHelper} 
            />
            
            }

        </main>
    )
}