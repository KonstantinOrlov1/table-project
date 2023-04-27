import React from "react";
import { FixedSizeList } from "react-window";
import data from "../data/db.json";
import styles from "./styles.module.css";
import { CellYear } from "../components/Cell/CellYear";
import { CellDate } from "../components/Cell/CellDate";
import { CellSvod } from "../components/Cell/CellSvod";
import classNames from "classnames";
import { CommentColumn } from "../components/Cell/CommentColumn";

const Row = ({ index, style }) => {
  return (
    <div style={style} className={classNames(styles.row, styles.row_table)}>
      <CellYear value={data[index]?.year} />
      <CellDate value={data[index]?.start} />
      <CellDate value={data[index]?.end} />
      <CellSvod value={data[index]?.isSvod} />
      <CommentColumn idElem={data[index]?._id} index={index} />
    </div>
  );
};

export const RootPage = () => (
  <div className={styles.root}>
    <div className={classNames(styles.row, styles.header_table)}>
      <span className={classNames(styles.header_table_name, styles.year)}>
        Год
      </span>
      <span className={classNames(styles.header_table_name, styles.start)}>
        Дата запуска
      </span>
      <span className={classNames(styles.header_table_name, styles.end)}>
        Дата остановки
      </span>
      <span className={classNames(styles.header_table_name, styles.svod)}>
        Выбрано
      </span>
      <span className={classNames(styles.header_table_name, styles.comment)}>
        Комментарии
      </span>
    </div>
    <FixedSizeList
      height={500}
      width={1300}
      itemSize={50}
      itemCount={data.length}
    >
      {Row}
    </FixedSizeList>
  </div>
);
