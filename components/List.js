import Image from "next/image";
import styles from "../styles/List.module.css";

const Li = ({ item, imgSize }) => {
    const { img, title, secondaryText } = item;
    return (
        <li className={styles.list__item}>
            <div className="mr-16">
                <Image
                    objectFit="contain"
                    height={imgSize}
                    width={imgSize}
                    src={`/img/${img}`}
                />
            </div>
            <div>
                <h3 className="typo-body m-0">{title}</h3>
                <span className="typo-body2">{secondaryText}</span>
            </div>
        </li>
    );
};

export default function List({ list, imgSize = 70, direction = "column" }) {
    return (
        <ul
            className={`${styles.list} list-style-none p-0 ${styles[direction]}`}
        >
            {list.map((item, index) => (
                <Li key={index} item={item} imgSize={imgSize} />
            ))}
        </ul>
    );
}
