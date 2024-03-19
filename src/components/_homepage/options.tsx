import { useEffect} from "react";
import styles from '@/styles/menu.module.css';

function Menu(props: {
    bodyJSX: string,
    setBodyJSX: React.Dispatch<React.SetStateAction<string>>;
    keys: string[];    
    isKeyExist: (keyStr :string) => boolean;
}) {


    const {setBodyJSX, isKeyExist} = props;
    useEffect(() => {
        const changeKeybyHash = (name: string) => {
            name = name.substring(1).toLowerCase();
    
            if (name === "") setBodyJSX("home");
            else if (isKeyExist(name)) setBodyJSX(name);
        };

        const handleHashChange = () => {
            changeKeybyHash(window.location.hash);
        };
        window.addEventListener('hashchange', handleHashChange);
        handleHashChange();
        return () => {
          window.removeEventListener('hashchange', handleHashChange);
        };
      }, [setBodyJSX, isKeyExist]);

    return (
        <div className={styles.menudiv}>
            <ul>
            {props.keys.map((key, index) => {
                 const keyL = key.toLowerCase();
                    return (
                        <li key={`menuitem${index}`} className={props.bodyJSX === keyL ? styles.selectedoption : styles.menuitem}>
                        <a href={`#${keyL}`} >
                            ./{key}
                        </a>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Menu;
