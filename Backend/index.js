const express = require('express');
const cors = require("cors");

const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes')
const courseRoutes = require('./routes/courseRoutes')
const lectureRoutes = require('./routes/lectureRoutes')
const userRoutes = require('./routes/userRoutes')

const app = express();

app.use(cors());

app.use(express.json());

// Routes
app.use('/auth', authRoutes);
app.use('/courses', courseRoutes);
app.use('/lectures', lectureRoutes);
app.use('/users', userRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT,async () => {
    try {
        connectDB;
        console.log(`Server running on port ${PORT}`);
        console.log(`connected to database`);
    } catch (error) {
        console.log(error);
        console.log(`error connecting to database`);
    }
})
