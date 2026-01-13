import mongoose from 'mongoose';

// MongoDB connection URL
const mongodbURL = 'mongodb://127.0.0.1:27017/hotels';

mongoose.connect(mongodbURL);

// Default connection
const db = mongoose.connection;

// Event listeners
db.on('connected', () => {
  console.log('✅ Connected to MongoDB server');
});

db.on('error', (err) => {
  console.error('❌ MongoDB connection error:', err);
});

db.on('disconnected', () => {
  console.log('⚠️ MongoDB disconnected');
});

export default db;
