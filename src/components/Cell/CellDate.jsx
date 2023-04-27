import classNames from "classnames";
import { MONTH } from "../../utils/helpers";
import styles from "./styles.module.css";

export const CellDate = ({ value }) => {
  const date =
    new Date(value?.$date) == "Invalid Date"
      ? "Нет данных"
      : new Date(value.$date);

  if (date === "Нет данных") {
    return (
      <span className={classNames(styles.value, styles.date)}>{date}</span>
    );
  }

  const month = MONTH[date.getMonth() + 1];
  const day = date.getDate();
  const year = date.getFullYear();

  return (
    <span
      className={classNames(styles.value, styles.date)}
    >{`${day} ${month} ${year}`}</span>
  );
};
