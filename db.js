import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
// MongoDB connection URL
//const mongodbURL = process.env.MongoDB_URL_Local;
const mongodbURL = process.env.MongoDB_URL;

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
