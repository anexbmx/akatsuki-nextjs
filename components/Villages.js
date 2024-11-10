import { useRef, useState } from "react";
import styles from "../styles/Villages.module.css";

import * as VILLAGES_ICONS from "../svgs/villagesIcon-v2";
import ModalBottomSheet from "./ModalBottomSheet";

const Village = ({ village, setVillage }) => {
    const VillageIcon = VILLAGES_ICONS[village.name];

    const onChangeVillage = () => setVillage(village);

    return (
        <div className={styles.villages__item}>
            <button
                onClick={onChangeVillage}
                aria-label={village.name}
                className={`${styles.villages__button} circle `}
            >
                <VillageIcon size={30} height={25} />
            </button>
            <h3 className={`${styles.villages__title} typo-caption`}>
                {village.name}
            </h3>
        </div>
    );
};

export default function Villages({ villages }) {
    const selectedVillage = useRef();
    const [isOpen, setIsOpen] = useState(false);

    const setSelectedVillage = (village) => {
        selectedVillage.current = village;
        setIsOpen(true);
    };

    const closeModal = () => setIsOpen(false);

    return (
        <>
            <section>
                <h2 className="mb-8">Villages</h2>
                <div className={`${styles.villages} hide-scroll`}>
                    {villages.map((village) => (
                        <Village
                            key={village._id}
                            village={village}
                            setVillage={setSelectedVillage}
                        />
                    ))}
                </div>
            </section>
            <ModalBottomSheet
                isOpen={isOpen}
                village={selectedVillage.current}
                closeModal={closeModal}
            />
        </>
    );
}
