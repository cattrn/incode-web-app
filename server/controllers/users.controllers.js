// @route   GET api/users/current
// @desc    Get the logged in user's details
// @access  Private
module.exports.getCurrentUser = (req, res) => {}

// @route   PUT api/users/current
// @desc    Update the logged in user's details
// @access  Private
module.exports.updateCurrentUser = (req, res) => {}

// @route   POST api/users/current/submit/:project_id
// @desc    Create project submission for logged in user to specific project
// @access  Private
module.exports.submitProject = (req, res) => {
  res.send('submitProject Incomplete')
}

// @route   POST api/users/new
// @desc    Create new user and send them email confirmation/invitation
// @access  Private/Admin
module.exports.addUser = (req, res) => {
  res.send('addUser Incomplete')
}

// @route   DELETE api/users/:id/delete
// @desc    Delete a user
// @access  Private/Admin
module.exports.deleteUser = (req, res) => {
  res.send('deleteUser Incomplete')
}
