const { json } = require('express')
const posts = require('../db/db.js')

const index = (req, res) => {

    //send response with the 200 status
    res.status(200).json(
        {
            data: posts,
            counter: posts.length
        }
    )
}

const show = (req, res) => {
     const post = posts.find(post => post.slug === req.params.slug)

     console.log(post);
     if (!post){
        return res.status(404).json({
            error: `404! Not found`
        })
     }
     return res.json({
        data:post
     })
}

module.exports = {
    index,
    show
}