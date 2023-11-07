const express = require('express');
const connectToDB = require('./db/db');
const authRoutes = require('./routes/authRoutes');
const messageRoutes = require('./routes/messageRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); 

connectToDB()
  .then(() => {
    // Routes for user authentication (login, register)
    app.use('/auth', authRoutes);

    // Routes for handling messages
    app.use('/chats', messageRoutes);

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Error connecting to the database:', err);
  });