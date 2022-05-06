//MongoDB Schema
const mongoose = require('mongoose')
const schema = mongoose.Schema

const memeSchema = new schema ({
    pictureID : Number,
    reachs: Number,
    likes: Number,
    shares: Number,
    comments: Number,
    viral: String
})

const memeModel = mongoose.model('memes', memeSchema)



module.exports = memeModel