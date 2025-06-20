import styles from "./FieldLayout.module.css";

export const FieldLayout = () => {
  return (
    <>
      <div className={styles["container-button"]}>
        <button className={styles.button}>-</button>
        <button className={styles.button}>-</button>
        <button className={styles.button}>-</button>
        <button className={styles.button}>-</button>
        <button className={styles.button}>-</button>
        <button className={styles.button}>-</button>
        <button className={styles.button}>-</button>
        <button className={styles.button}>-</button>
        <button className={styles.button}>-</button>
      </div>
      <div>
        <button className={styles["button-start"]}> Начать сначала</button>
      </div>
    </>
  );
};
