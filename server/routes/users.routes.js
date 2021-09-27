const express = require('express')
const {
  getCurrentUser,
  updateCurrentUser
} = require('../controllers/users.controllers')
const { addUser, deleteUser } = require('../controllers/admin.controllers')
const router = express.Router({ mergeParams: true })

router.get('/current', getCurrentUser)
router.put('/current', updateCurrentUser)

// Admin routes
router.post('/new', addUser)
router.delete('/:id/delete', deleteUser)

module.exports = router
