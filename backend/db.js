// db.js
const mongoose = require('mongoose');

// MongoDB connection
mongoose.connect('mongodb+srv://saxenanimish473:real123@cluster0.wez6c.mongodb.net/paytm', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Connected to MongoDB ✅'))
    .catch((error) => console.error('Database connection error ❌:', error));

// Define User schema
const UserSchema = new mongoose.Schema({
    username: { type: String, unique: true, required: true, trim: true, lowercase: true },
    firstName: { type: String, required: true, trim: true },
    password: { type: String, required: true, trim: true }
});

// Define Account schema
const AccountSchema = new mongoose.Schema({
    UserId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    balance: { type: Number, default: 1000 }
});

// Create models
const User = mongoose.model('User', UserSchema);
const Account = mongoose.model('Account', AccountSchema);

// Export models
module.exports = { User, Account };