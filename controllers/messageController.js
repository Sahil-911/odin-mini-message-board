const Message = require('../models/Message');

const messageController = {
    getAllMessages: async (req, res) => {
        try {
            const messages = await Message.find().sort({ added: -1 });
            res.json(messages);
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'There was a problem :(' });
        }
    },

    createMessage: async (req, res) => {

        try {
            const newMessage = new Message({
                user: req.body.user,
                text: req.body.text,
                added: req.body.added,
            });
            await newMessage.save();

            const messages = await Message.find().sort({ added: -1 });

            res.status(200).json({ message: 'Message saved successfully', data: messages });
        } catch (error) {
            console.log(error.code);
            res.status(500).json({ message: 'There was a problem :(' });
        }
    },
};

module.exports = messageController;