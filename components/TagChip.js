import styles from '../styles/TagChip.module.css';


export default function TagChip ({items = []}) {
    return <ul className={styles.list}>
        {
            items.map(({Icon, title}, index) => <li key={index} className={styles.item}>
                <div className={styles.icon}>
                    <Icon size={16} height={16} />
                </div>
                <span className="typo-caption2">{title}</span>
            </li>)
        }
    </ul>
}
