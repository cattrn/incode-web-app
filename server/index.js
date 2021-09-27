const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const authRouter = require('./routes/auth.routes')
const usersRouter = require('./routes/users.routes')
const cohortRouter = require('./routes/cohort.routes')
const emailRouter = require('./routes/email.routes')

const app = express()
const PORT = process.env.PORT || 5000

// Middleware
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Route middleware
app.use('/auth', authRouter)
app.use('/users', usersRouter)
app.use('/cohort/:id', cohortRouter)
app.use('/email', emailRouter)

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))
