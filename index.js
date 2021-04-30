const teams = require('./teams')
const express = require('express')
const { getAllTeams, getTeamById } = require('./controller/cont-teams')

const app = express()
const PORT = 1400

app.get('/teams', getAllTeams)

app.get('/teams/:id', getTeamById)

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`) // eslint-disable-line no-console
})
