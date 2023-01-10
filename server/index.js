require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const corsOptions = {
  origin: 'http://localhost/',
  methods: ['GET'],
  maxAge: '3600',
};

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use(router);
app.use(morgan('dev'));

app.set('port', PORT);

module.exports = app;
