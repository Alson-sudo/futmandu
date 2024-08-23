const express = require('express');

const app = express();

const dbconfig = require('./db')
const futsalsRoute = require('./routes/futsalsRoute')

app.use('/api/futsals',futsalsRoute)

const port = process.env.PORT || 5006;
app.listen(port ,() => console.log('node server started'));