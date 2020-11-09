const express = require('express');
const passport = require('passport');
const router = express.Router();
const { createToken } = require('../services/authService');
require('../services/passportServices');

router.post('/signIn', async (req, res) => {
  const { userName, password, authType } = req.body;
  if (authType === 'local') {
    const token = await createToken(userName, password);
    res.json({ token });
  }
  if (authType === 'apple') {
    // TBD - Apple Oauth 로그인 구현
  }
});

router.post('/signUp', (req, res) => {
  res.json();
});

router.get(
  '/github/callback',
  passport.authenticate('github', {
    failureRedirect: '/login',
    session: false,
  }),
  (req, res) => res.redirect('/')
);

router.get('/github', passport.authenticate('github', { session: false }));

module.exports = router;
