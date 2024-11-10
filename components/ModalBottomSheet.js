import styles from "../styles/ModalBottomSheet.module.css";
import Image from "next/image";
import VILLAGE_ICONS from "../svgs/villagesIcon-v2";
import MemberAvatar from "./MemberAvatar";
import { ChevronLeft } from "../svgs/icons";
import Link from "next/link";

const Leaders = ({ leaders }) =>
    leaders.length > 0 ? (
        <>
            <h3 className="typo-body secondary-color">Leader(s)</h3>
            <div className="d-flex flex-wrap">
                {leaders.map((leader) => (
                    <MemberAvatar
                        key={leader.name}
                        size={50}
                        background={leader.color}
                        avatar={leader.pictureName}
                        name={leader.name}
                    />
                ))}
            </div>
        </>
    ) : (
        <></>
    );

export default function ModalBottomSheet({ village, isOpen, closeModal }) {
    const VillageIcon = VILLAGE_ICONS[village?.name];

    return (
        <div
            onClick={closeModal}
            className={`${styles.overlay} ${
                isOpen ? styles.open : styles.close
            }`}
        >
            <div className={`${styles.modal} hide-scroll`}>
                <button aria-label="close modal" className={styles.closeBtn}>
                    <ChevronLeft size={12} />
                </button>
                {village && (
                    <>
                        <div className={styles.imgWrapper}>
                            <Image
                            alt=''
                                height={285}
                                width={500}
                                src={`/img/villages/${village.name}.png`}
                            />
                            <button className={styles.icon}>
                                <VillageIcon height={40} />
                            </button>
                        </div>
                        <div className={styles.content}>
                            <p className={styles.description}>
                                {village.summary.substring(0, 150)}
                                <Link href={`https://naruto.fandom.com/wiki/${village.name}`}>
                                    <a aria-label={`more about ${village.name}`}>{" [more...]"}</a>
                                </Link>
                            </p>
                            <Leaders leaders={village.leaders} />
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
