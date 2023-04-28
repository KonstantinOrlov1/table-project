import styles from "./styles.module.css";

export const CommentColumn = ({ getComment, idElem, setState }) => {
  const id = idElem.$oid;
  const comment = getComment || "";

  return (
    <textarea
      id={id}
      cols="3"
      rows="1"
      placeholder="Ваш комментарий"
      className={styles.comment}
      onChange={(e) =>
        setState((v) => {
          return {
            ...v,
            [id]: e.target.value,
          };
        })
      }
      defaultValue={comment}
    ></textarea>
  );
};
