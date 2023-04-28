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

export const HEIGHTCOMPONENT = 500;
export const WIDTHCOMPONENT = 1300;
export const HEIGHTROW = 50;

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
