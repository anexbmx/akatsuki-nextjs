import Link from "next/link";
import Image from "next/image";
import styles from "../styles/NotFoundMember.module.css";

export default function NotFoundMember() {
    return (
        <div className={styles.container}>
            <Image
                className={styles.img}
                height="405"
                width="506"
                src="/img/not-found.svg"
                objectFit="contain"
                alt=""
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
