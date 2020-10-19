const Room = require('@models').Room;
const User = require('@models').User;
const TextMessage = require('@models').TextMessage;
const PivotUserRoom = require('@models').UserRoom;
const Op = require("Sequelize").Op;

const ChatController = {
    create_message: async (req, res) => {
        const message = TextMessage.build({
            room_id: req.body.room,
            author_id: req.user.id,
            source: req.body.message,
            created_at: new Date(),
            updated_at: new Date(),
        });

        var created_message = await message.save()
            .then(result => result)
            .catch(result => result);
        res.status(200).json({message: 'message created successfully', created_message: created_message})
    },
    create_room: async (req, res) => {

        var room_exists = await User.findOne({
            where: {id: req.user.id},
            include: [
                {
                    model: Room, as: 'rooms',
                    include: [
                        {
                            model: User, as: 'users', where: {id: req.body.to}
                        }
                    ]
                }
            ]
        })
            .then((res) => res.rooms.length)
            .catch(err => err);

        if (!room_exists) {
            const room = Room.build({
                type: 'single',
                title: '',
                image: '',
                author_id: '',
            });

            var created_room = await room.save()
                .then(result => result)
                .catch(result => result);

            var assignment = await ChatController.assign_room_user(created_room, req.user.id, req.body.to.id);
        }


        res.status(200).json({message: 'room created successfully'})
    },
    assign_room_user: (room, from, to) => {
        return PivotUserRoom.bulkCreate([{
            user_id: from,
            room_id: room.id,
            last_seen: null,
            has_unread: 0,
            is_blocked: 0,
        }, {
            user_id: to,
            room_id: room.id,
            last_seen: null,
            has_unread: 0,
            is_blocked: 0,
        }]).then(result => result)
            .catch(result => result);
    },
    get_rooms: async (req, res) => {
        res.json('asdasdsad')
    }
};

module.exports = ChatController;