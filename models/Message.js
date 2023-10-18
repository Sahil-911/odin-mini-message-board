const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema({
    text: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    added: {
        type: Date,
        default: Date.now
    }
});

const Message = mongoose.model('message', messageSchema);

module.exports = Message;