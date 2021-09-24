import useFetch from "../hooks/useFetch";
import API_ENDPOINT from "../utils/API_ENDPOINT";
import styles from "../styles/CircleMembers.module.css";
import Loader from "./Loader";
import CircleAvatar from "./CircleAvatar";
import * as VILLAGES_ICONS from "../svgs/villagesIcon";

const CircleItem = ({ item }) => {
    let { name, pictureName, village, color } = item;

    const VillageIcon = VILLAGES_ICONS[village];
    return (
        <article className={styles.member}>
            <CircleAvatar background={color} name={name} avatar={pictureName} />

            <VillageIcon color="#333" anti size="40" />
        </article>
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
                <Loader status={status}>
                    {data.map((item) => (
                        <CircleItem key={item._id} item={item} />
                    ))}
                </Loader>
            </div>
        </section>
    );
}
