const express = require('express');
const router = express.Router();
const user = require('@controllers/user_controller');
const auth = require('@lib/authentication/middlewares/auth');

router.get('/', auth, user.index);

router.get('/:userId', auth, user.show);

router.post('/', auth, user.store);

router.post('/upload', auth, user.upload);

router.put('/:userId', auth, user.update);

router.delete('/:userId', auth, user.destroy);

// Authentication
router.post('/signup', user.signUp);

router.post('/login', user.login);

router.post('/logout', auth, user.logout);

module.exports = router;
