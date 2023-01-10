const profileRouter = require('express').Router();
const {
  profile: { getProfile, addProfile },
} = require('../controllers');

profileRouter.get('/BookWormz/profile', getProfile);

profileRouter.post('/BookWormz/profile', addProfile);

module.exports = profileRouter;
