import classNames from "classnames";
import styles from "./styles.module.css";

export const CellSvod = ({ value }) => {
  const valueCell =
    value === false ? "Нет" : value === true ? "Да" : "Нет значения";

  return (
    <span className={classNames(styles.value, styles.svod)}>{valueCell}</span>
  );
};
