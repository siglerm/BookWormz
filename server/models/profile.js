const { Profile } = require('../database/mongo');

const getDBProfile = () => Profile.find({});

const addDBProfile = (data) => {
  return Profile.create(data);
};

const addDBThought = ({ data, username }) => {
  if (data.listDest === 'Currently Reading') {
    return Profile.replaceOne(
      { username: username },
      { library: { currentRead: data } },
    );
  } else if (data.listDest === 'Already Read') {
    return Profile.updateOne(
      { username: username },
      { $push: { alreadyRead: data } },
    );
  } else if (data.listDest === 'To Be Read') {
    console.log('Meow', data);
    return Profile.updateOne(
      { username: username },
      { $push: { toBeRead: data } },
    );
  } else {
    return Profile.updateOne(
      { username: username },
      { $push: { thoughts: data } },
    );
  }
};
module.exports = {
  getDBProfile,
  addDBProfile,
  addDBThought,
};
