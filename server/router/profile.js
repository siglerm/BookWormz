const profileRouter = require('express').Router();
const {
  profile: { getProfile, addProfile, addThought },
} = require('../controllers');

profileRouter.get('/BookWormz/profile', getProfile);

profileRouter.post('/BookWormz/profile', addProfile);

profileRouter.patch('/BookWormz/profile', addThought);

module.exports = profileRouter;
