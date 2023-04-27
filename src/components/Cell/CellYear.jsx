import classNames from "classnames";
import styles from "./styles.module.css";

export const CellYear = ({ value }) => {
  return (
    <>
      {value ? (
        <span className={classNames(styles.value, styles.year)}>{value}</span>
      ) : (
        <span className={classNames(styles.value, styles.year)}>
          Нет значения
        </span>
      )}
    </>
  );
};
