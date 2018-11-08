const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const bodyParser = require('body-parser')
const morgan = require('morgan')

app.use(morgan("dev"))
app.use(bodyParser.json())


const snackRoutes = require('./snacks.route.js')
app.use('/snacks', snackRoutes)


app.use((err, req, res, next) => {
  console.error(err)
  const status = err.status || 500
  res.status(status).json({ error: err })
})

app.use((req, res, next) => {
  res.status(404).json({ error: { message: 'Not found' }})
})












    app.listen(port, () => {
      console.log(`snacks listening on port ${port}!`)
    })
 