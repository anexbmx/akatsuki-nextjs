import styles from "../styles/Footer.module.css";
import Image from "next/image";
export default function Footer() {
    return (
        <>
            <div className={styles.bg}>
                <Image src="/img/yahiko-bg.png" height="261" width="341" />
            </div>
            <footer className={styles.footer}>
                <p className={styles.p}>
                    Made With <span className={styles.heart}>♥️</span> in
                    Germany
                </p>
            </footer>
        </>
    );
}
