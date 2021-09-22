import styles from "../styles/PersonalInfo.module.css";
import Image from "next/image";
import { getBirthDateSymbol } from "../utils/utils";

const Info = ({ title = "title", value = "..." }) => {
    const icons = {};
    if (title === "Village") icons[value] = `/img/villages/${value}.svg`;
    else if (title === "Sex") icons[value] = `/img/gender/${value}.svg`;
    else if (title === "Birthdate") icons[value] = getBirthDateSymbol(value);
    else if (title === "Blood") icons[value] = `/img/gender/blood.svg`;
    else if (title === "Weight") icons[value] = `/img/gender/weight.svg`;
    else if (title === "Height") icons[value] = `/img/gender/height.svg`;
    else if (title === "Age") icons[value] = `/img/gender/age.svg`;
    else if (title === "Member Type") icons[value] = `/img/gender/member.svg`;
    else if (title === "Clan") icons[value] = `/img/clans/clan.svg`;

    return (
        <div className={styles.info}>
            <div className={styles.heading}>
                <div className={styles.icon}>
                    <Image height="15" width="15" src={icons[value]} />
                </div>

                <h3 className={`${styles.value} typo-body`}>{value}</h3>
            </div>

            <span className={`${styles.title} typo-caption`}>{title}</span>
        </div>
    );
};

export default function PersonalInfo({ data }) {
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
        clan
    } = data;
    return (
        <>
            <h2 className={styles.japonaise}>{japonaiseName}</h2>
            <Image src={`/img/members/${pictureName}_profile.png`} layout="fill" objectFit="contain" />
            <img className={styles.profilePicture}  />
            <div className={styles.container}>
                <Info title="Sex" value={sex} />
                <Info title="Age" value={age} />
                <Info title="Birthdate" value={birthdate} />
                <Info title="Weight" value={weight} />
                <Info title="Height" value={height} />
                <Info title="Village" value={village} />
                <Info title="Clan" value={clan} />
                <Info title="Blood" value={bloodType} />
                <Info title="Member Type" value={memberType} />
            </div>
        </>
    );
}
