const profileRouter = require('express').Router();
const {
  profile: { getProfile },
} = require('../controllers');

profileRouter.get('./profile', getProfile);

module.exports = profileRouter;
