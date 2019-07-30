const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

// Getting User Model
const User = require('../../models/User');

//@route    POST api/users
//@desc     TEST Route
//@access   Public
router.post(
  '/',
  [
    check('name', 'Name is required')
      .not()
      .isEmpty(),
    check('email', 'Please include a valid Email').isEmail(),
    check(
      'password',
      'Please enter a password with 6 or more characters'
    ).isLength({ min: 6 })
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    try {
      // See if user exists
      let user = await User.findOne({ email });

      if (user) {
        res.status(400).json({ errors: [{ msg: 'User already exists.' }] });
      }
      // Get Users Gravatar
      const avatar = gravatar.url(email, {
        s: '200',
        r: 'pg',
        d: 'mm'
      });

      user = new User({
        name,
        email,
        avatar,
        password
      });

      // Encrypt Passwords

      // Return JsonWebTokens
    } catch (err) {}

    res.send('User Route');
  }
);

module.exports = router;
