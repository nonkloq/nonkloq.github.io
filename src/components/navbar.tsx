import Link from "next/link";
import styles from '@/styles/navbar.module.css';
import Logo from "@/components/logo";

export default function Navbar(props: {
    to_path: string,
    name: string

}){
    return <div className={styles.navbar}>
        <a className={styles.logo} href={'/'}>
            <Logo/>
        </a> 
        
        
        
        <Link className={styles.routeb} href={props.to_path}>{props.name}</Link>
    </div>
}