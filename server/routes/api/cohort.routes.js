const express = require('express')
const {
  getCohort,
  getCohortUsers,
  getSyllabus,
  getProjects,
  getMeetings,
  getRecordings
} = require('../../controllers/cohort/getCohort.controllers')
const {
  addCohort,
  addSyllabusModule,
  addProjectModule,
  addMeetingModule,
  addRecordingModule
} = require('../../controllers/cohort/postCohort.controllers')
const {
  updateClassTimes,
  updateHurdle,
  updateStaff,
  archiveCohort,
  updateSyllabusModule,
  updateProjectModule,
  updateMeetingModule,
  updateRecordingModule
} = require('../../controllers/cohort/putCohort.controllers')
const {
  deleteSyllabusModule,
  deleteProjectModule,
  deleteMeetingModule,
  deleteRecordingModule
} = require('../../controllers/cohort/deleteCohort.controllers')
const router = express.Router({ mergeParams: true })

router.get('/', getCohort)
router.get('/users', getCohortUsers)
router.put('/class-times', updateClassTimes)
router.put('/hurdle', updateHurdle)
router.put('/staff', updateStaff)
router.post('/new', addCohort)
router.put('/archive', archiveCohort)

router.route('/syllabus').get(getSyllabus).post(addSyllabusModule)
router
  .route('/syllabus/:id')
  .put(updateSyllabusModule)
  .delete(deleteSyllabusModule)

router.route('/projects').get(getProjects).post(addProjectModule)
router
  .route('/projects/:id')
  .put(updateProjectModule)
  .delete(deleteProjectModule)

router.route('/meetings').get(getMeetings).post(addMeetingModule)
router
  .route('/meetings/:id')
  .put(updateMeetingModule)
  .delete(deleteMeetingModule)

router.route('/recordings').get(getRecordings).post(addRecordingModule)
router
  .route('/recordings/:id')
  .put(updateRecordingModule)
  .delete(deleteRecordingModule)

module.exports = router
