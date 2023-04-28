export const MONTH = [
  "янв.",
  "фев.",
  "мар.",
  "апр.",
  "май.",
  "июн.",
  "июл.",
  "авг.",
  "сен.",
  "окт.",
  "ноя.",
  "дек.",
];

export const addComments = (data, id) => {
  let comments = localStorage.getItem("comments");

  if (!comments) {
    comments = {};
  } else {
    comments = JSON.parse(comments);
  }

  comments = JSON.stringify({ ...comments, [id]: data });
  localStorage.setItem("comments", comments);
};
