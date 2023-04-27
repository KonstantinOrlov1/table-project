import styles from "./styles.module.css";

export const CommentColumn = ({ idElem, index }) => {
  const id = idElem?.$oid ? idElem?.$oid : `${index}`;

  const addComment = (data) => {
    if (data === "") {
      localStorage.removeItem(id);
    }

    localStorage.setItem([id], data);
  };

  return (
    <textarea
      name=""
      id={id}
      cols="3"
      rows="1"
      placeholder="Ваш комментарий"
      className={styles.comment}
      onChange={(e) => addComment(e.target.value)}
      defaultValue={localStorage.getItem(id) || ""}
    ></textarea>
  );
};
