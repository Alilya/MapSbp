const express = require('express')
const app = express()
const PORT = process.env.PORT || 8081;
const routerPlaces = require('./routes/places-route')
const routerActivity = require('./routes/activity-route')

app.use(express.json());

app.use('/api', routerPlaces);
app.use('/api', routerActivity);

app.listen(PORT, () => {
  console.log(`App running on PORT ${PORT}.`)
})
