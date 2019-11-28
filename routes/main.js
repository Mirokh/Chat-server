const express = require('express');
const router = express.Router();
const make = require('@controllers/make_controller');
const auth = require('@lib/authentication/middlewares/auth');

router.get('/cookie', (req, res) => {
    res.cookie('test', 'cookie_value');
    return res.send('cookie has been set!');
});

module.exports = router;
