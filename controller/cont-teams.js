const teams = require('../teams')

const getAllTeams = (request, response) => {
  return response.send(teams)
}

const getTeamById = (request, response) => {
  const teamID = teams.find((team) => team.id === parseInt(request.params.id))

  return response.send(teamID)
}

module.exports = { getAllTeams, getTeamById }
