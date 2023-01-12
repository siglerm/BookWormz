const {
  bookInfo: { addDBBook, addDBThought, getDBBookInfo },
} = require('../models');

const addBook = (req, res) => {
  return addDBBook(req.body)
    .then(() => {
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log('There is an error in BookInfo controllers: ', error);
    });
};

const addThought = (req, res) => {
  return addDBThought(req.body)
    .then(() => {
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log('There is an error in BookInfo controllers: ', error);
    });
};

const getBookInfo = (req, res) => {
  return getDBBookInfo()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      console.log('There is an error in BookInfo controllers: ', error);
    });
};

module.exports = {
  addBook,
  addThought,
  getBookInfo,
};
