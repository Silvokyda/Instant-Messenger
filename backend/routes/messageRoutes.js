// backend/routes/messageRoutes.js

const express = require('express');
const Message = require('../db/models/message'); 
const chatDetails = require('../db/chats');
const router = express.Router();

// Route to fetch messages for a specific user
router.get('/messages/:userId', async (req, res) => {
  const userId = req.params.userId;

  try {
    const collection = await chatDetails();
    const messages = await collection.find({
      $or: [{ sender: userId }, { receiver: userId }]
    }).toArray();

    res.json(messages);
  } catch (error) {
    console.error('Error fetching messages:', error);
    res.status(500).json({ error: 'Error fetching messages' });
  }
});

router.post('/send', async (req, res) => {
  const { sender, receiver, content } = req.body;

  try {
    const collection = await chatDetails();
    const message = {
      sender: sender,
      receiver: receiver,
      content: content,
      timestamp: new Date() 
    };

    await collection.insertOne(message);
    res.json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error sending message:', error);
    res.status(500).json({ error: 'Error sending message' });
  }
});

module.exports = router;