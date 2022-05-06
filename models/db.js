//MongoDB Connection
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/BestMeme', {useNewUrlParser: true}, (err) => {
    if(!err){
        console.log('MongoDB Connection Success')
    }
    else {console.log('Error in DB connection : ' + err)}
})

