const express = require('express');
const router = express.Router();
const { ensureAuth, ensureGuest } = require('../middleware/auth');

const Story = require('../models/Story');

// @desc   Login/Landing Page
// @route  GET /
router.get('/', ensureGuest, (req, res) => {
  res.render('Login', {
    layout: 'Login',
  });
});

// @desc   Dashboard
// @route  GET /dashboard
router.get('/dashboard', ensureAuth, async (req, res) => {
  try {
    const stories = await Story.find({ user: req.user.id }).lean();
    res.render('Dashboard', {
      name: req.user.firstName,
      stories,
    });
  } catch (error) {
    console.error(error);
    res.render('error/500');
  }
});

module.exports = router;
