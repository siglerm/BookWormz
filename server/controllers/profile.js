const {
  profile: { getDBProfile, addDBProfile, addDBThought },
} = require('../models');

const getProfile = (req, res) => {
  return getDBProfile()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      console.log('There is an error in controllers: ', error);
    });
};

const addProfile = (req, res) => {
  return addDBProfile(req.body)
    .then(() => {
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log('There is an error in controllers: ', error);
    });
};

const addThought = (req, res) => {
  console.log(req.body);
  return addDBThought(req.body)
    .then(() => {
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log('There is an error in controllers: ', error);
    });
};
module.exports = {
  getProfile,
  addProfile,
  addThought,
};
