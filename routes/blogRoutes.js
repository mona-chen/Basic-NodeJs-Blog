const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');


// blog routes
router.get('/', blogController.blog_index);

router.get('/blogs', blogController.blog_index);

   router.post('/create', blogController.blog_create_post);

   router.get('/blogs/:id', blogController.blog_details);

   router.delete('/blogs/:id', blogController.blog_delete);

   router.get('/create', blogController.blog_create_get);

    module.exports = router;