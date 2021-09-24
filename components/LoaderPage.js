import { SharinganIcon } from "./Loader";
import styles from "../styles/Loader.module.css";

export default function LoaderPage({size = 50}) {
    return (
        <div className={styles.loaderPage}>
            <SharinganIcon size={size} />
            <p className={styles.text}>Loading...</p>
        </div>
    );
}
