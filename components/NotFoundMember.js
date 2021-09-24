import Link from "next/link";
import Image from "next/image";
import styles from "../styles/NotFoundMember.module.css";

export default function NotFoundMember() {
    return (
        <div className={styles.container}>
            <Image
                className={styles.img}
                height="305"
                width="406"
                src="/img/not-found.svg"
            />
            <div className={styles.div}>
                <h1  className={`${styles.heading} typo-headline5`}>You are Lost!</h1>
                <p className={`typo-body1 m-0 mb-8`}>
                    Sorry we cannot find the requested page
                </p>

                <Link href="/">
                    <a className={styles.goHome}>Go Home</a>
                </Link>
            </div>
        </div>
    );
}
