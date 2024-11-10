import styles from "../styles/MemberCard.module.css";
import Image from "next/image";
import Link from "next/link";
import { getMemberProfilePicture, getMemberProfileURL, slug } from "../utils/utils";
import * as VILLAGES_ICONS from "../svgs/villagesIcon-v2";

/**
 * Card Component
 * Renders an individual member card.
 */
const Card = ({ item: { name, pictureName, japonaiseName, village, color } }) => {
    // Construct necessary data
    const picture = getMemberProfilePicture(pictureName);
    const pathname = getMemberProfileURL(name);
    const VillageIcon = VILLAGES_ICONS[`Anti${village}`];

    // Background style
    const cardBackgroundStyle = { background: color };

    return (
        <Link href={pathname}>
            <a>
                <article className={styles.card}>
                    {/* Background Overlay */}
                    <div className={styles.card__bg} style={cardBackgroundStyle}></div>

                    {/* Member Image */}
                    <div className={styles.card__img}>
                        <Image
                            src={picture}
                            alt={`${name} profile picture`}
                            height={194}
                            width={250}
                            objectFit="contain"
                            quality={100}
                            priority={pictureName === "itachi"}
                        />
                    </div>

                    {/* Village Icon */}
                    {VillageIcon && <VillageIcon size={60} color="#fff" />}

                    {/* Member Names */}
                    <div className={styles.card__name}>
                        <span className={styles.card__name_jp}>{japonaiseName}</span>
                        <h3 className={styles.card__name_en}>{name}</h3>
                    </div>
                </article>
            </a>
        </Link>
    );
};

/**
 * CardMembers Component
 * Renders the list of member cards.
 */
const MemberCard = ({ members }) => {
    return (
        <section>
            <h2>All Members</h2>
            <div className={`${styles.members} hide-scroll`}>
                {members.map((member) => (
                    <Card key={member._id} item={member} />
                ))}
            </div>
        </section>
    );
};

export default MemberCard;
