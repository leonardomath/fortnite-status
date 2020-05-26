const express = require('express')
const nunjucks = require('nunjucks')
const { resolve } = require('path')
const api = require('./services/api')

const app = express()

app.listen(3333)
app.use(express.urlencoded({ extended: false}))
app.use(express.static(resolve(__dirname, '..', 'public')))
nunjucks.configure(resolve(__dirname, 'views'), {
  autoescape: true,
  express: app
})

app.get('/', (req, res) => {
  return res.render('index.njk')
})

app.post('/', async (req, res, next) => {
  const { username } = req.body
  const response = await api.get(`/${username}`)
  if (response.data.error) {
    return res.render('index.njk', { error: true })
  }
  const playerData = response.data
  return res.render('index.njk', { user: playerData })

})
