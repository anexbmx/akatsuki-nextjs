import useFetch from "../hooks/useFetch";
import API_ENDPOINT from "../utils/API_ENDPOINT";
import styles from "../styles/CircleMembers.module.css";
import Image from "next/image";
import Link from "next/link";
import { slug } from "../utils/utils";
import Loader from "./Loader";

const Circle = ({ item }) => {
    let { name, pictureName, village, color } = item;

    const villageSymbol = `/img/villages/Anti_${village}.svg`;
    const avatar = `/img/members/${pictureName}_avatar.png`;
    const pathname = `/members/${slug(name, "-")}`;
    const background = `linear-gradient(180deg, ${color} 0%, transparent 100%)`;

    return (
        <Link
            href={{
                pathname,
                query: {
                    hex: color,
                },
            }}
        >
            <a>
                <article className={styles.member}>
                    <div
                        style={{ background }}
                        className={styles.members__avatar}
                    >
                        <Image width="60" height="60" src={avatar} alt={name} />
                    </div>
                    <h3 className={`${styles.members__name} typo-caption`}>
                        {name}
                    </h3>
                    <Image
                        width="40"
                        height="14"
                        src={villageSymbol}
                        alt={name}
                    />
                </article>
            </a>
        </Link>
    );
};

export default function CircleMembers({ memberType = "LEADERS" }) {
    const { data, status } = useFetch(API_ENDPOINT[memberType]);

    return (
        <section>
            <h2>
                {memberType === "LEADERS" ? "Leaders" : "Unofficial Members"}
            </h2>
            <div className={`${styles.members} hide-scroll`}>
                {status === "fetched" ? (
                    data.map((item) => <Circle key={item._id} item={item} />)
                ) : (
                    <Loader />
                )}
            </div>
        </section>
    );
}
