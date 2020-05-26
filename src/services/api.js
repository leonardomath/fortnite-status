const axios = require('axios')

const api = axios.create({
  baseURL: 'https://api.fortnitetracker.com/v1/profile/pc',
  headers: { 'TRN-Api-Key': '1d89d312-8ad0-4d26-9efa-12f7ebc61482' }
})

module.exports = api