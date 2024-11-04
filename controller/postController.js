const { json } = require('express')
const posts = require('../db/db.js')
//integrazione per bonus
//method fs per leggere e modificare i file di sistema
const fs = require('fs')


const index = (req, res) => {

    console.log(posts);
    
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

const store = (req, res) =>{
    //Crea un nuovo oggetto all'interno del db
    const post ={
        title: req.body.title,
        slug: req.body.slug,
        content: req.body.content,
        image: req.body.image,
        tags: req.body.tags,
    }

    //validazione dei campi dell'oggetto
    if (!post.title || !post.slug || !post.content) {
        return res.status(400).json({ error: "Missing required fields" });
    }

    //aggiunge il nuovo post all'array
    posts.push(post)

    //aggiorna file db
    fs.writeFileSync('./db/db.js',`module.exports = ${JSON.stringify(posts, null, 4)}`)

    res.json({
        data: posts,
        status: 201,
        counter: posts.length
    })
}

module.exports = {
    index,
    show,
    store
}