const { BookInfo } = require('../database/mongo');

const addDBBook = ({ data }) => {
  console.log(data);
  return BookInfo.create(data);
};

const addDBThought = (data, title) => {
  console.log(data);
  return BookInfo.updateOne({ title: title }, { $push: { thoughts: data } });
};

const getDBBookInfo = () => BookInfo.find({});

module.exports = {
  addDBBook,
  addDBThought,
  getDBBookInfo,
};
