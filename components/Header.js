import Image from "next/image";
import Link from "next/link";
export default function Header() {
    return (
        <header className="header">
            <Link href="/">
                <a>
                    <Image
                        className="logo"
                        src="/img/akatsuki.svg"
                        height="36"
                        width="54px"
                        alt="Home"
                    />
                </a>
            </Link>

            <h1 className="typo-headline6 main-heading">暁 Akatsuki</h1>
        </header>
    );
}
