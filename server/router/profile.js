const profileRouter = require('express').Router();
const path = require('path');
const {
  profile: { getProfile, addProfile, addThought },
} = require('../controllers');

const loadPage = (req, res) => {
  // console.log(path.join(__dirname, '../../client/dist/index.html'));
  res.sendFile(path.join(__dirname, '../../client/dist/index.html'));
};
profileRouter.get('/shelf', loadPage);
profileRouter.get('/grow', loadPage);
profileRouter.get('/addThought', loadPage);
profileRouter.get('/bookInfo', loadPage);

profileRouter.get('/BookWormz/profile', getProfile);

profileRouter.post('/BookWormz/profile', addProfile);

profileRouter.patch('/BookWormz/profile', addThought);

module.exports = profileRouter;
