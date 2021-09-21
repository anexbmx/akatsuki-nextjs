import useFetch from "../hooks/useFetch";
import API_ENDPOINT from "../utils/API_ENDPOINT";
import styles from "../styles/CardMembers.module.css";
import Image from "next/image";
import Link from "next/link";
import { slug } from "../utils/utils";

const Card = ({ item }) => {
    let { name, pictureName, japonaiseName, village, color } = item;

    const villageSymbol = `/img/villages/Anti_${village}.svg`;
    const picture = `/img/members/${pictureName}_profile.png`;
    const profile = `/members?name=${slug(name, "-")}`;
    const background = color;

    return (
        <Link href={profile}>
            <a>
                <article className={styles.card}>
                    <div
                        className={styles.card__bg}
                        style={{ background }}
                    ></div>
                    {/* <img
                     className={styles.card__img}
                           height="300"
                            objectFit="contain"
                            src={picture}
                            alt=""
                        /> */}
                    <div className={styles.card__img + " " + styles[pictureName]}>
                        <Image
                            layout="fill"
                            objectFit="contain"
                            src={picture}
                            alt=""
                        />
                    </div>
                    <Image
                        className={styles.card__village}
                        layout="fixed"
                        width="74"
                        height="29"
                        src={villageSymbol}
                        alt=""
                    />
                    <div className={styles.card__name}>
                        <span className={styles.card__name_jp}>
                            {japonaiseName}
                        </span>
                        <h3 className={styles.card__name_en}>{name}</h3>
                    </div>
                </article>
            </a>
        </Link>
    );
};

export default function CardMembers() {
    const { data, status } = useFetch(API_ENDPOINT.MEMBERS);

    return (
        <section>
            <h2>All Members</h2>
            <div className={`${styles.members} hide-scroll`}>
                {status === "fetched"
                    ? data.map((item) => <Card key={item._id} item={item} />)
                    : "loading..."}
            </div>
        </section>
    );
}
