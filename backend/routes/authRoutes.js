// backend/routes/authRoutes.js

const express = require('express');
const jwt = require('jsonwebtoken');
const userDetails = require('../db/details');
const bcrypt = require('bcrypt');
const router = express.Router();

const JWT_SECRET = '4rever2moro';

// Route for user login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const collection = await userDetails(); 
    const user = await collection.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generating a JWT token for the authenticated user
    const token = jwt.sign({ email: user.email }, JWT_SECRET);
    res.json({ message: 'User logged in successfully', token });
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ error: 'Error logging in. Check server logs for details.' });
  }
});

// Route for user registration
router.post('/register', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const collection = await userDetails(); 
    const hashedPassword = await bcrypt.hash(password, 10); 

    const newUser = { username, email, password: hashedPassword }; 
    const result = await collection.insertOne(newUser);

    if (result.insertedId) {
      res.json({ message: 'User registered successfully' });
    } else {
      res.status(500).json({ error: 'Failed to register user' });
    }
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ error: 'Error registering user. Check server logs for details.' });
  }
});


module.exports = router;
