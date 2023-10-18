const express = require('express');
const router = express.Router();
const messageController = require('../controllers/messageController');

// GET /messages (all messages)
router.get('/', messageController.getAllMessages);

// POST /messages (create new message)
router.post('/', messageController.createMessage);

module.exports = router;