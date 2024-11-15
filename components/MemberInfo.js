import styles from "../styles/MemberInfo.module.css";
import { getBirthDateSymbol } from "../utils/utils";
import ClansIcon from "../svgs/ClansIcon";
import Icons from "../svgs/icons";
import Image from "next/image";

const Info = ({ title = "title", value = "..." }) => {
    let Icon;
    if (title === "Village") {
        /* Icon = villagesIcon[value] */
    } else if (title === "Clan") Icon = ClansIcon[value];
    else if (title === "Birthdate") Icon = getBirthDateSymbol(value);
    else if (title === "Sex") Icon = Icons[value];
    else Icon = Icons[title];

    return (
        <div className={styles.info}>
            <div>
                {Icon && (
                    <Icon className={styles.icon} color="#fff" size={18} />
                )}
            </div>
            <div className={styles.heading}>
                <h3 className={`${styles.value} typo-body4`}>
                    {value ? value : "Unkown"}
                </h3>
                <span className={`${styles.title} typo-caption`}>{title}</span>
            </div>
        </div>
    );
};

export default function MemberInfo({ data }) {
    const {
        pictureName,
        japonaiseName,
        memberType,
        sex,
        age,
        weight,
        height,
        bloodType,
        name,
        village,
        birthdate,
        clan,
    } = data;
    return (
        <>
            <div className={styles.container}>
                <div className={styles.container__imgWrapper}>
                    <h2 className={styles.japonaise}>{japonaiseName}</h2>
                    <div className={styles.container__img}>
                        <Image
                            src={`/img/members_optimized/${pictureName}_profile.png`}
                            height="360"
                            width="279"
                            objectFit="contain"
                            quality={100}
                            alt={name}
                        />
                    </div>
                </div>
                <div className={styles.container__info}>
                    <Info title="Sex" value={sex} />
                    <Info title="Age" value={age} />
                    <Info title="Birthdate" value={birthdate} />
                    <Info title="Blood" value={bloodType} />
                    <Info title="Weight" value={weight} />
                    <Info title="Height" value={height} />
                    <Info title="Member Type" value={memberType} />
                    <Info title="Clan" value={clan} />
                    <Info title="Village" value={village} />
                </div>
            </div>
        </>
    );
}
