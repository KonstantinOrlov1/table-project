import classNames from "classnames";
import styles from "./styles.module.css";

export const CellYear = ({ value }) => {
  const valueCell = value ? value : "Нет значения";

  return (
    <span className={classNames(styles.value, styles.year)}>{valueCell}</span>
  );
};
