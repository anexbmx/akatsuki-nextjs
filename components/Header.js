import Image from "next/image";
export default function Header() {
    return (
        <header className="header">
            <Image
                className="logo"
                src="/img/akatsuki.svg"
                height="36"
                width="54px"
                alt=""
            />
            <h1 className="typo-headline6 main-heading">暁 Akatsuki</h1>
        </header>
    );
}
