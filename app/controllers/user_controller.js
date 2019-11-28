const User = require('@models').User;
const auth = require('@lib/authentication/auth');
const bcrypt = require('@lib/my-bcrypt');
const Storage = require('@lib/storage/index').uploadImageToStorage();

const UserController = {
    index: (req, res) => {
        User.findByPk(1).then(makes => {
            res.send(makes)
        });
    },
    show: (req, res) => {
        User.findByPk(req.params.makeId).then(make => {
            res.send(make)
        })
    },
    store: (req, res) => {
        const user = User.build({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            phone_number: req.body.phone_number,
            password: req.body.password,
        });
        user.save().then(result => {
            res.send(result)
        }).catch(result => {
            res.send(result)
        });
    },
    update: (req, res) => {
        User.findByPk(req.params.makeId).then(make => {
            make.name = req.body.name;
            make.save().then(result => {
                res.send(result)
            })
        }).catch(result => {
            res.send(result)
        });
    },
    destroy: (req, res) => {
        User.findByPk(req.params.makeId).then(make => {
            make.destroy().then(result => {
                res.send(result)
            }).catch(result => {
                res.send(result)
            });
        })
    },
    upload: (req, res) => {
        var success = Storage;
        res.json(success)
    },
    signUp: async (req, res) => {
        var success, message, token, status;
        var data = await User
            .findAll({where: {email: req.body.email}})
            .then(result => result);
        if (data.length) {
            success = false;
            message = 'Email address already in use, use another!';
            token = null;
            status = 400;
        } else {
            var user = await User.build({
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                email: req.body.email,
                phone_number: req.body.phone_number,
                password: bcrypt.hash(req.body.password),
            });
            await user.save().then(user => user).catch((result) => result);
            user = JSON.parse(JSON.stringify(user));
            delete user.password;
            success = true;
            message = 'You successfully registered!';
            token = await auth.createToken(user);
            status = 200
        }
        res.status(status).json({success: success, message: message, token: token});
    },
    login: async (req, res) => {
        var message, success;
        var user = await User.findOne({where: {email: req.body.email}});
        if (user && await bcrypt.compare(req.body.password, user.password)) {
            var token = await auth.createToken(user, req.body.remember_me ? null : 7200)
            success = true;
            message = 'You successfully logged in!';
            res.json({success: success, message: message, token: token, user: user});
        } else {
            success = false;
            message = 'Login credentials do not match our records!';
            res.status(400).json({success: success, message: message});
        }
    },
    logout: async (req, res) => {
        await auth.revokeToken(req.user);
        var success = true;
        var message = 'You have been successfully logged out!';
        res.json({success: success, message: message});
    }
};

module.exports = UserController;