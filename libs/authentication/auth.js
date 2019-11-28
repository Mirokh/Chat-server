const jwt = require('jsonwebtoken');
const accessToken = require('./models/accessToken');

const auth = {
    createToken: async (user, expires_at) => {
        console.log(expires_at);
        var random_string = await Math.random().toString(36).slice(2, -1);
        var access_token = await accessToken.build({
            id: random_string,
            user_id: user.id,
            revoked: 0,
            expires_at: expires_at,
            createdAt: new Date(),
            updatedAt: new Date()
        });
        await access_token.save();
        return jwt.sign({user: user, jti: random_string}, 'secretKey');
    },
    revokeToken: async (user) => {
        var token = await accessToken
            .update({revoked: 1}, {where: {user_id: user.id}})
            .then(accessToken => accessToken);

        return {success: true, token: token}
    }
};

module.exports = auth;