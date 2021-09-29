const express = require('express')
const {
  getCurrentUser,
  updateCurrentUser,
  submitProject,
  addUser,
  deleteUser
} = require('../../controllers/users.controllers')
const router = express.Router({ mergeParams: true })

router.route('/current').get(getCurrentUser).put(updateCurrentUser)
router.post('/current/submit/:project_id', submitProject)
router.post('/new', addUser)
router.delete('/:id/delete', deleteUser)

module.exports = router
