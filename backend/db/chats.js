// backend/db/chats.js
const connectToDB = require('./db'); // Import the connectToDB function

async function chatsDetails() {
  try {
    const client = await connectToDB(); // Connect to the database
    const db = client.db('Users'); // Specify the database name
    const collection = db.collection('chats'); // Specify the collection name
    console.log('Connected to "Users" database and "details" collection');
    return collection; // Return the collection
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }
}

module.exports = chatsDetails;
