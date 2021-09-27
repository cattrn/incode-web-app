const express = require('express')
const {
  confirmEmail,
  resendPassword,
  sendFeedback
} = require('../controllers/email.controllers')
const router = express.Router()

router.post('/confirm-email', confirmEmail)
router.post('/resend-password', resendPassword)
router.post('/feedback', sendFeedback)

module.exports = router
