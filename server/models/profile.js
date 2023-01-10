const db = require('../database/mongo');

const getDBProfile = () => db.find({});

module.exports = {
  getDBProfile,
};
