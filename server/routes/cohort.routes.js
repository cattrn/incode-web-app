const express = require('express')
const {
  getCohort,
  getSyllabus,
  getProjects,
  getMeetings,
  getRecordings
} = require('../controllers/cohort.controllers')
const { getCohortUsers } = require('../controllers/admin.controllers')
const router = express.Router({ mergeParams: true })

router.get('/', getCohort)
router.get('/syllabus', getSyllabus)
router.get('/projects', getProjects)
router.get('/meetings', getMeetings)
router.get('/recordings', getRecordings)

// Admin routes
router.get('/users', getCohortUsers)

module.exports = router
