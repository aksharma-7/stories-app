const express = require('express');
const router = express.Router();
const { ensureAuth, ensureGuest } = require('../middleware/auth');

// @desc   Login/Landing Page
// @route  GET /
router.get('/', ensureGuest, (req, res) => {
  res.render('Login', {
    layout: 'Login',
  });
});

// @desc   Dashboard
// @route  GET /dashboard
router.get('/dashboard', ensureAuth, (req, res) => {
  res.render('Dashboard');
});

module.exports = router;
