import Link from "next/link";
import { ChevronLeft, Logo } from "../svgs/icons";
import styles from "../styles/Header.module.css";

export default function Header({ title = "暁 Akatsuki" }) {
    const isHomePage = title === "暁 Akatsuki";

    return (
        <header className={styles.header}>
            <div className={styles.header__content}>
                <Link href="/" aria-label="Back Home">
                    <a className={isHomePage ? "" : "button"}>
                        {isHomePage ? (
                            <Logo width={48} />
                        ) : (
                            <ChevronLeft width={16} color="#fff" />
                        )}
                    </a>
                </Link>
                <h1 className="typo-headline6 main-heading">{title}</h1>
            </div>
        </header>
    );
}
