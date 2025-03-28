const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { User, Account } = require('../db');
const JWT_SECRET = require('../config');

const router = express.Router();

// User Signup
router.post('/signup', async (req, res) => {
    const { username, firstName, password } = req.body;

    if (!username || !firstName || !password) {
        return res.status(400).json({ message: 'All fields are required: username, firstName, password' });
    }

    try {
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await User.create({ username, firstName, password: hashedPassword });
        const newAccount = await Account.create({ UserId: newUser._id, balance: 1000 });

        const token = jwt.sign({ user_id: newUser._id }, JWT_SECRET, { expiresIn: '1h' });

        res.status(201).json({
            message: 'Signup successful!',
            user: newUser,
            account: newAccount,
            token
        });

    } catch (error) {
        console.error('Signup error:', error);
        res.status(500).json({ message: 'Signup failed. Please try again.', error: error.message });
    }
});

module.exports = router;