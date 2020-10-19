const express = require('express');
const router = express.Router();
const chat = require('@controllers/chat_controller');
const auth = require('@lib/authentication/middlewares/auth');

router.post('/message', auth, chat.create_message);

router.post('/room', auth, chat.create_room);

router.get('/room', auth, chat.get_rooms);

module.exports = router;
