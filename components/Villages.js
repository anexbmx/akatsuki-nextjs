
import styles from "../styles/Villages.module.css";

import * as VILLAGES_ICONS from "../svgs/villagesIcon-v2";

const Village = ({ name }) => {
    const VillageIcon = VILLAGES_ICONS[name];
    return (
        <div className={styles.villages__item}>
            <button aria-label={name} className={`${styles.villages__button} circle`}>
                <VillageIcon size={30} height={25} />
            </button>
            <h3 className={`${styles.villages__title} typo-caption`}>{name}</h3>
        </div>
    );
};

export default function Villages({ villages }) {
    return (
        <section>
            <h2 className="mb-8">Villages</h2>
            <div className={`${styles.villages} hide-scroll`}>
                {villages.map(({ name, _id }) => (
                    <Village key={_id} name={name} />
                ))}
            </div>
        </section>
    );
}
