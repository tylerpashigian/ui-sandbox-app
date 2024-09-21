import styles from "./spinner.module.css";

const bars = Array(12).fill(0);

export function Spinner({ color = "#000", size = 20 }) {
  return (
    <div
      className={styles.wrapper}
      style={
        {
          "--spinner-size": `${size}px`,
          "--spinner-color": color,
        } as React.CSSProperties
      }
    >
      <div className={styles.spinner}>
        {bars.map((_, i) => (
          <div className={styles.bar} key={`spinner-bar-${i}`} />
        ))}
      </div>
    </div>
  );
}
