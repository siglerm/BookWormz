const Profile = require('../database/mongo');

const getDBProfile = () => Profile.find({});

const addDBProfile = (data) => {
  return Profile.create(data);
};

const addDBThought = ({ data, username }) => {
  console.log('This is thee data: ', data, username);
  return Profile.updateOne(
    { username: username },
    { $push: { thoughts: data } },
  );
};
module.exports = {
  getDBProfile,
  addDBProfile,
  addDBThought,
};
