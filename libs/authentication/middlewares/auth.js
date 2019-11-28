const jwt = require('jsonwebtoken');
const accessToken = require('../models/accessToken');
const moment = require('moment')

module.exports = async (req, res, next) => {
    const bearerHeader = req.headers['authorization'];
    if (typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(' ');
        req.token = bearer[1];
        var token = jwt.verify(req.token, 'secretKey');
        var token_id = await accessToken.findByPk(token.jti);
        if (!token_id) {
            res.json({success: false, message: 'Unauthorized', ERR_NO: '901'}).status(404)
        }
        if (token_id.revoked) {
            res.json({success: false, message: 'Unauthorized', ERR_NO: '902'}).status(400)
        }
        var expires_at = moment(token_id.createdAt).add(token_id.expires_at, 'seconds');
        if (token_id.expires_at && expires_at < moment()) {
            res.json({success: false, message: 'Unauthorized', ERR_NO: '903'}).status(400)
        }
        req.user = token.user;
        next();
    } else {
        res.sendStatus(403)
    }
};
