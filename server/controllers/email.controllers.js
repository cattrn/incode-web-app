// @route   POST api/email/reset-password
// @desc    Reset a user's password - compare token in req.query to identify
// @access  Public
module.exports.resendPassword = (req, res) => {
  res.send('resendPassword Incomplete')
}

// @route   POST api/email/feedback
// @desc    Send form data to owner of cohort
// @access  Private
module.exports.sendFeedback = (req, res) => {
  res.send('sendFeedback Incomplete')
}
