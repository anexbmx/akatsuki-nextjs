import styles from "../styles/CircleMembers.module.css";
import Image from "next/image";

export default function CircleAvatar({ size = 70, name, avatar, background, ...props }) {
    avatar = `/img/members/${avatar}_avatar.png`;
    background = `linear-gradient(180deg, ${background} 0%, transparent 100%)`;

    return (
        <div {...props}
            style={{ background, height: size, width: size }}
            className={styles.members__avatar}
        >
            <Image
                width={size - 10}
                height={size - 10}
                src={avatar}
                alt={name}
            />
        </div>
    );
}
