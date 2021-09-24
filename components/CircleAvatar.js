import styles from "../styles/CircleMembers.module.css";
import Image from "next/image";
import Link from "next/link";
import { slug } from "../utils/utils";

export default function CircleAvatar({
    size = 70,
    name,
    avatar,
    background,
    hideName = false,
    ...props
}) {
    const pathname = `/members/${slug(name, "-")}`;
    const bgColor = `linear-gradient(180deg, ${background} 0%, transparent 100%)`;
    avatar = `/img/members/${avatar}_avatar.png`;

    return (
        <Link
            href={{
                pathname,
                query: {
                    hex: background,
                },
            }}
        >
            <a style={{textAlign: "center"}}>
                <div
                    {...props}
                    style={{
                        background: bgColor,
                        height: size,
                        width: size,
                    }}
                    className={styles.members__avatar}
                >
                    <Image
                        width={size - 10}
                        height={size - 10}
                        src={avatar}
                        alt={name}
                    />
                </div>
                {!hideName && (
                    <h3 className={`${styles.members__name} typo-caption`}>
                        {name}
                    </h3>
                )}
            </a>
        </Link>
    );
}
