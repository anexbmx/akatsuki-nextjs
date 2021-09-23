import styles from "../styles/Fab.module.css";

export default function FAB({
    shape = "circle",
    position = "absolute",
    top = 0,
    left = 0,
    right = 0,
    bottom = 0,
    children,
    bgColor = "",
}) {
    return (
        <button
            style={{ position, top, left, right, bottom }}
            className={`${styles.button} ${styles[bgColor]} ${styles[shape]}`}
        >
            <span className={styles.icon}>{children}</span>
        </button>
    );
}
