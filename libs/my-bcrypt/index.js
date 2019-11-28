const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = {
    hash: (password) => {
        var salt = bcrypt.genSaltSync(saltRounds);
        return bcrypt.hashSync(password, salt);
    },
    compare: (password, hash) => {
        return bcrypt.compareSync(password, hash);
    }
};