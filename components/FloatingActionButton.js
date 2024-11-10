import styles from "../styles/FloatingActionButton.module.css";

export default function FloatingActionButton({
    shape = "circle",
    position = "absolute",
    top = 0,
    left = 0,
    right = 0,
    bottom = 0,
    children,
    bgColor = "",
    className,
    ...props
}) {
    return (
        <button
            style={{ position, top, left, right, bottom }}
            className={`${styles.button} ${styles[bgColor]} ${styles[shape]} ${className}`}
            {...props}
        >
            <span className={styles.icon}>{children}</span>
        </button>
    );
}
