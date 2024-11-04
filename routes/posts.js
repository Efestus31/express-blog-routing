const express = require('express')

//define the router instance
const router = express.Router()
const postController = require('../controller/postController.js')

//define all routes here

//Post API
router.get('/', postController.index)

//show only the single(selected resources)
router.get('/:slug', postController.show)

//crea un novo oggetto
router.post('/', postController.store)


//export the router instance
module.exports = router