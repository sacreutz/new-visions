const express = require('express')
const app = express()
const port = 3000
const path = require('path');


app.use('/static', express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/dashboard.html')))


app.use(function (req, res, next) {
  res.status(404).send("Sorry can't find that!")
})

app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
