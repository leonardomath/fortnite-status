const axios = require('axios')

const api = axios.create({
  baseURL: 'https://api.fortnitetracker.com/v1/profile/pc',
  headers: { 'TRN-Api-Key': 'your_api_key_here' }
})

module.exports = api