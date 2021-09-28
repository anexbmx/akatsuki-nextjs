import styles from "../styles/CardMembers.module.css";
import Image from "next/image";
import Link from "next/link";
import { slug } from "../utils/utils";
import * as VILLAGES_ICONS from "../svgs/villagesIcon-v2";

const Card = ({ item }) => {
    let { name, pictureName, japonaiseName, village, color } = item;

    const picture = `/img/members_sm/${pictureName}_profile.png`;
    const pathname = `/members/${slug(name, "-")}`;
    const background = color;
    const VillageIcon = VILLAGES_ICONS[`Anti${village}`];

    return (
        <Link href={pathname}>
            <a>
                <article className={styles.card}>
                    <div
                        className={styles.card__bg}
                        style={{ background }}
                    ></div>

                    <div className={styles.card__img}>
                        <Image
                            height={194}
                            width={250}
                            objectFit="contain"
                            src={picture}
                            quality={100}
                            alt=""
                            priority={pictureName === "itachi"}
                            
                        />
                    </div>

                    {<VillageIcon size={60} color="#fff" />}
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

export default function CardMembers({ members }) {
    return (
        <section>
            <h2>All Members</h2>
            <div className={`${styles.members} hide-scroll`}>
                {members.map((item) => (
                    <Card key={item._id} item={item} />
                ))}
            </div>
        </section>
    );
}
