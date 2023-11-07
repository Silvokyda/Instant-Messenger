const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema(
  {
    sender: {
      type: String, // Change the data type to String
      required: true
    },
    receiver: {
      type: String, // Change the data type to String
      required: true
    },
    content: {
      type: String,
      required: true
    },
    timestamp: {
      type: Date,
      default: Date.now
    }
    // Other message properties as needed
  },
  {
    collection: 'chats' 
  }
);

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;
