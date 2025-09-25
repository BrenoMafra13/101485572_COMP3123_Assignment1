const express = require('express');
const { body } = require('express-validator');
const router = express.Router();
const userController = require('../controllers/userController');

router.post(
  '/signup',
  [
    body('username').notEmpty().withMessage('Username is required'),
    body('email').isEmail().withMessage('Valid email is required'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
  ],
  userController.signup
);

router.post(
  '/login',
  [
    body('password').notEmpty().withMessage('Password is required'),
    body('email').optional().isEmail(),
    body('username').optional()
  ],
  userController.login
);

module.exports = router;
