import styles from "../styles/Footer.module.css";
import Image from "next/image";
export default function Footer() {
    return (
        <>
            <div className={styles.bg}>
                <Image src="/img/yahiko-bg.png" height="261" width="341" alt="" />
            </div>
            <footer className={styles.footer}>
                <p className={`${styles.p} typo-body2`}>
                    Made With <span className={styles.heart}>♥️</span> in
                    Germany <br /> created by <a className={styles.link} href="https://www.linkedin.com/in/anas-boumediene/">Anas Boumediene</a>
                </p>
            </footer>
        </>
    );
}
