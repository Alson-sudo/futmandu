const mongoose = require('mongoose');

var mongoURL = 'mongodb+srv://alsonsir:alsonsir@cluster0.rybxs.mongodb.net/mern-futsals'

mongoose.connect(mongoURL)

var connection = mongoose.connection

connection.on('error',()=>{
    console.log('Mongodb connection failed')
})
connection.on('connected',()=>{
    console.log('Mongodb connection successful')
})

module.exports = mongoose
