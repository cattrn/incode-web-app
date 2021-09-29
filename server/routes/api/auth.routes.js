const express = require('express')
const {
  validateInvitation,
  registerUser,
  loginUser
} = require('../../controllers/auth.controllers')
const router = express.Router()

router.route('/register').get(validateInvitation).put(registerUser)
router.post('/login', loginUser)

module.exports = router
