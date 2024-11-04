const { json } = require('express')
const posts = require('../db/db.js')

const index = (req, res) =>  {

    //send response with the 200 status
    res.status(200).json({
        data: posts,
        counter: posts.length
    })
}