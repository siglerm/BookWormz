require('dotenv').config();
const path = require('path');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const { profileRouter, bookInfoRouter } = require('./router');

const corsOptions = {
  origin: 'http://localhost/BookWormz',
  methods: ['GET', 'POST', 'PATCH'],
  maxAge: '3600',
};

const app = express();
const PORT = process.env.PORT || 8080;
console.log(path.join(__dirname));
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(profileRouter);
app.use(bookInfoRouter);
app.use(morgan('dev'));

app.set('port', PORT);

module.exports = app;
