const express = require('express');
const router = express.Router();
const forumController = require('../controllers/forum');

router.get('/', forumController.getForumPosts);
router.post('/', forumController.createForumPost);
router.get('/:id', forumController.getForumPostById);
router.post('/:id/reply', forumController.replyToForumPost);

module.exports = router;