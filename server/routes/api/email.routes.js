const express = require('express')
const {
  resendPassword,
  sendFeedback
} = require('../../controllers/email.controllers')
const router = express.Router()

router.post('/reset-password', resendPassword)
router.post('/feedback', sendFeedback)

module.exports = router
