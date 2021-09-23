import styles from '../styles/Chip.module.css';


export default function Chips ({items = []}) {
    return <ul className={styles.list}>
        {
            items.map(({Icon, title}, index) => <li key={index} className={styles.item}>
                <div className={styles.icon}>
                    <Icon size={32} />
                </div>
                <span className="typo-caption2">{title}</span>
            </li>)
        }
    </ul>
}