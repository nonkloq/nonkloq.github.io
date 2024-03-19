import { SocialLinks } from "@/types";
import styles from "@/styles/sidebar.module.css";
import SVGDiv from "@/components/_homepage/svg";

export default function Socials(
    props: {
        socials: SocialLinks[]
    }
) {

    return (
        <div className={styles.sidebarDiv}>
            <ul>
                {props.socials.map((obj, _) => (
                    <li key={obj.name}>
                    <a href={obj.link} target="_blank">
                    <SVGDiv classname={styles.logoDiv} svgName={obj.name}/>
                    </a>
                    </li>
                ))}
            </ul>
        </div>
      );


}