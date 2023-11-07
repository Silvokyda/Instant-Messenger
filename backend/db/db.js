// backend/db/db.js
const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://messenger:4rever2moro@cluster0.i3ld3ox.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connectToDB() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
    return client; // Return the connected client
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
    throw err;
  }
}

module.exports = connectToDB; // Export the function directly