const express = require('express')
const { append, redirect } = require('express/lib/response')
const router = express.Router()
const memeModel = require('../models/meme')

var i = 1

//Homepage
router.get('/', (req, res, next) => {
    res.render('index')
})
//

//Upload Meme
router.get('/upload', (req, res, next) => {
    res.render('upload')
})

router.post('/upload', (req, res, next) => {
    const meme = new memeModel
    meme.pictureID = i++
    meme.likes = RandomLike()
    meme.shares = RandomShare()
    meme.comments = RandomComment()
    meme.reachs = RandomReach(meme.likes, meme.shares, meme.comments)
    meme.viral = ViralCheck(meme.likes, meme.shares, meme.comments,meme.reachs)
    meme.save()
    res.redirect('upload')
})
//

//Picture List
router.get('/picturelist', (req, res, next) => {
    memeModel.find({}, (err, docs) => {
        if(err) throw err;
        res.render('pictureList', {
           pictureLists: docs
        })
    })
})

//
module.exports = router

//Random Reach
function RandomReach(like, share, comment) {
    if(like >= share && like >= comment){
        return Math.floor((Math.random() * (100001-like)) + like)
    }
    if(share >= like && share >= comment){
        return Math.floor((Math.random() * (100001-share)) + share)
    }
    if(comment >= like && comment >= share){
        return Math.floor((Math.random() * (100001-comment)) + comment)
    }
}

//Random Like
function RandomLike() {
    return Math.floor((Math.random() * 100001) + 1)
}

//Random Share
function RandomShare() {
    return Math.floor((Math.random() * 100001) + 1)
}

//Random Comment
function RandomComment() {
    return Math.floor((Math.random() * 100001) + 1)
}

//Viral Check
function ViralCheck(like, share, comment, reachs) {
    var engagement = like+share+comment
    if(engagement/reachs >= 0.1){
        return 'Viral'
    }
    else return 'Not Viral'
}

