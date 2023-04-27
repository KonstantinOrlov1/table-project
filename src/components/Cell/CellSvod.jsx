import classNames from "classnames";
import styles from "./styles.module.css";

export const CellSvod = ({ value }) => {
  return (
    <>
      {value === false ? (
        <span className={classNames(styles.value, styles.svod)}>Нет</span>
      ) : value === true ? (
        <span className={classNames(styles.value, styles.svod)}>Да</span>
      ) : (
        <span className={classNames(styles.value, styles.svod)}></span>
      )}
    </>
  );
};
