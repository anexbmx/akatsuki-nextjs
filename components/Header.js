import Link from "next/link";
import { ChevronLeft, Logo } from "../svgs/icons";
export default function Header({ title = "暁 Akatsuki" }) {
    return (
        <header className="header">
            <div className="status-bar" />
            <div className="header__content">
                <Link href="/">
                    {title === "暁 Akatsuki" ? (
                        <a>
                            <Logo width={48} />
                        </a>
                    ) : (
                        <a className="button">
                            <ChevronLeft width={16} color="#fff" />
                        </a>
                    )}
                </Link>

                <h1 className="typo-headline6 main-heading">{title}</h1>
            </div>
        </header>
    );
}
