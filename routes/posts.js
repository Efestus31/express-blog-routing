const express = require('express')

//define the router instance
const router = express.Router()
const postController = require('../controller/postController.js')

//define all routes here

//Post API
router.get('/posts', postController.index)

//show only the single(selected resources)
router.get('/:slug', postController.show)

//export the router instance
module.exports = router