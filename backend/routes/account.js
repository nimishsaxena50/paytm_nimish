const express = require('express');
const authentication = require('../middleware');
const { Account } = require('../db');

const router = express.Router();

// Transfer Money
router.post('/transfer', authentication, async (req, res) => {
    const { to, amount } = req.body;

    if (!to || !amount || isNaN(amount) || amount <= 0) {
        return res.status(400).json({ message: 'Invalid input. Provide valid "to" account ID and a positive "amount".' });
    }

    try {
        const senderAccount = await Account.findOne({ UserId: req.user.user_id });
        if (!senderAccount) {
            return res.status(404).json({ message: 'Sender account not found' });
        }

        if (senderAccount.balance < amount) {
            return res.status(400).json({ message: 'Insufficient balance' });
        }

        const receiverAccount = await Account.findById(to);
        if (!receiverAccount) {
            return res.status(404).json({ message: 'Receiver account not found' });
        }

        await Account.findByIdAndUpdate(senderAccount._id, { $inc: { balance: -amount } });
        await Account.findByIdAndUpdate(receiverAccount._id, { $inc: { balance: amount } });

        res.json({ message: 'Transfer successful', transferredAmount: amount });

    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
});

module.exports = router;
