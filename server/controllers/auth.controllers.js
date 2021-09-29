// @route   GET api/auth/register
// @desc    Check to see if req.query token is a valid account invitation
// @access  Public
module.exports.validateInvitation = (req, res) => {
  res.send('validateInvitation Incomplete')
}

// @route   PUT api/auth/register
// @desc    Update invited user, take new details (given name, family name and password), and set their account to active
// @access  Public
module.exports.registerUser = (req, res) => {
  res.send('registerUser Incomplete')
}

// @route   POST api/auth
// @desc    Authenticate and log in user
// @access  Public
module.exports.loginUser = (req, res) => {
  res.send('loginUser Incomplete')
}
