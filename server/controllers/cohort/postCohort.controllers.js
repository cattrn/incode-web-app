// @route   POST api/cohort/:id/new
// @desc    Create new cohort
// @access  Private/Admin
module.exports.addCohort = (req, res) => {
  // NOTE: req.params.id is likely useless here
}

// @route   POST api/cohort/:id/syllabus
// @desc    Create new syllabus module
// @access  Private/Admin
module.exports.addSyllabusModule = (req, res) => {}

// @route   POST api/cohort/:id/projects
// @desc    Create new project module
// @access  Private/Admin
module.exports.addProjectModule = (req, res) => {}

// @route   POST api/cohort/:id/meetings
// @desc    Create new meeting link module
// @access  Private/Admin
module.exports.addMeetingModule = (req, res) => {}

// @route   POST api/cohort/:id/recordings
// @desc    Create new recording link module
// @access  Private/Admin
module.exports.addRecordingModule = (req, res) => {}
