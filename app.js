const express = require('express');
const mongoose = require('mongoose');
const messageRoutes = require('./routes/messages');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const port = 5000;

// Connect to MongoDB
mongoose
.connect(process.env.URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((error) => {
    console.error('MongoDB connection error:', error);
});

const corsOptions = {
    origin: 'https://odin-mini-message-board.vercel.app/', // Replace with your front-end's URL
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // If you need to send cookies or authentication headers
};

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/messages', messageRoutes);

// Start server
app.listen(port, () => console.log(`Server started on port ${port}`));