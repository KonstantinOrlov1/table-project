import { useState } from "react";
import { addComments } from "../../utils/helpers";
import styles from "./styles.module.css";

export const CommentColumn = ({ idElem, index }) => {
  const id = idElem?.$oid ? idElem?.$oid : `${index}`;

  // const addComments = (data) => {
  //   if (data === "") {
  //     localStorage.removeItem(id);
  //   }

  //   localStorage.setItem([id], data);
  // };

  return (
    <textarea
      name=""
      id={id}
      cols="3"
      rows="1"
      placeholder="Ваш комментарий"
      className={styles.comment}
      onChange={(e) => addComments(e.target.value, id)}
      // defaultValue={localStorage.getItem(id) || ""}
    ></textarea>
  );
};
