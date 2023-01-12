const bookInfoRouter = require('express').Router();
const {
  bookInfo: { addBook, addThought, getBookInfo },
} = require('../controllers');

bookInfoRouter.get('/BookWormz/bookinfos', getBookInfo);

bookInfoRouter.post('/BookWormz/bookinfos', addBook);

bookInfoRouter.patch('/BookWormz/bookinfos', addThought);

module.exports = bookInfoRouter;
