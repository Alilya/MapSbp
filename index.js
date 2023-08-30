const express = require('express')
const app = express()
const PORT = process.env.PORT || 8081;
const router = require('./routes/places-route')

app.use(express.json());

app.use('/api', router);

app.listen(PORT, () => {
  console.log(`App running on PORT ${PORT}.`)
})
