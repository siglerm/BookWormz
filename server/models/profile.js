const Profile = require('../database/mongo');

const getDBProfile = () => Profile.find({});

const addDBProfile = (data) => {
  return Profile.create(data);
};

module.exports = {
  getDBProfile,
  addDBProfile,
};
