import styles from "./InformationLayout.module.css";

export const InformationLayout = () => {
  return (
    <>
      <h2 className={styles.heading}>
        Текущий символ хода: <span className={styles.symbol}> 0</span>{" "}
      </h2>
      <h2 className={styles.heading}>
        Победитель: <span className={styles.symbol}> __</span>{" "}
      </h2>
    </>
  );
};
