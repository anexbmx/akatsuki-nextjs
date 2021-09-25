
import styles from "../styles/CircleMembers.module.css";
import CircleAvatar from "./CircleAvatar";
import * as VILLAGES_ICONS from "../svgs/villagesIcon-v2";

const CircleItem = ({ item }) => {
    let { name, pictureName, village, color } = item;

    const VillageIcon = VILLAGES_ICONS[`Anti${village}`];
    return (
        <article className={styles.member}>
            <CircleAvatar background={color} name={name} avatar={pictureName} />

            <VillageIcon   color="#333"  size={35} />
        </article>
    );
};

export default function CircleMembers({ members, memberType = "LEADERS" }) {
    

    return (
        <section>
            <h2>
                {memberType === "LEADERS" ? "Leaders" : "Unofficial Members"}
            </h2>
            <div className={`${styles.members} hide-scroll`}>
                
                    {members.map((item) => (
                        <CircleItem key={item._id} item={item} />
                    ))}
                
            </div>
        </section>
    );
}
