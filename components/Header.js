import Link from "next/link";
import { ChevronLeft, Logo } from "../svgs/icons";
import styles from '../styles/Header.module.css';

export default function Header({ title = "暁 Akatsuki" }) {
    return (
        <header  className={styles.header}>
            <div className={styles.header__content}>
                <Link href="/">
                    {title === "暁 Akatsuki" ? (
                        <a aria-label="Back Home">
                            <Logo width={48} />
                        </a>
                    ) : (
                        <a aria-label="Back Home" className="button">
                            <ChevronLeft width={16} color="#fff" />
                        </a>
                    )}
                </Link>

                <h1 className="typo-headline6 main-heading">{title}</h1>
            </div>
        </header>
    );
}
