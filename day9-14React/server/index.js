const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/portfolio_db';

mongoose.connect(MONGO_URI)
    .then(() => console.log('✅ Connected to MongoDB for Portfolio'))
    .catch(err => console.error('❌ MongoDB Connection Error:', err));

// Project Schema
const ProjectSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    tags: [String],
    image: String,
    link: String,
    createdAt: { type: Date, default: Date.now }
});

const Project = mongoose.model('Project', ProjectSchema);

// Seed some initial data (Cleaning and Re-seeding for Surya)
const seedData = async () => {
    await Project.deleteMany({}); // Clear old placeholder data
    const initialProjects = [
        {
            title: "Online Voting Platform",
            description: "A secure and efficient voting system built using Node.js, Express, and MongoDB. Features real-time results and admin management.",
            tags: ["Node.js", "Express", "MongoDB", "EJS"],
            image: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?auto=format&fit=crop&q=80&w=600",
            link: "https://github.com/Suryateja28/voting_app"
        },
        {
            title: "Weather Outfit Suggester",
            description: "Innovative application that suggests clothing based on real-time weather data and user preferences.",
            tags: ["JavaScript", "Weather API", "Frontend"],
            image: "https://images.unsplash.com/photo-1515847049296-a281d6401047?auto=format&fit=crop&q=80&w=600",
            link: "https://github.com/Suryateja28/weather-based-outfit-suggestion-mainn"
        },
        {
            title: "MERN Development Course",
            description: "Comprehensive study of Full Stack development (CSE009MERN), including daily tasks, React components, and backend integration.",
            tags: ["React", "Express", "Node.js", "MERN"],
            image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=600",
            link: "https://github.com/Suryateja28/MERN-DEVELOPMENT-"
        },
        {
            title: "ECE Security System",
            description: "IoT-based security system utilizing Arduino and security sensors for real-time monitoring.",
            tags: ["Arduino", "Hardware", "C++", "Security"],
            image: "https://images.unsplash.com/photo-1553406830-ef2513450d76?auto=format&fit=crop&q=80&w=600",
            link: "https://github.com/Suryateja28/ece-security-system-based-on-arduino"
        },
        {
            title: "Modern Expense Tracker",
            description: "Personal finance manager with real-time balance tracking and glassmorphic UI.",
            tags: ["React", "CSS3", "Local Storage"],
            image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=600",
            link: "https://github.com/Suryateja28"
        }
    ];
    await Project.insertMany(initialProjects);
    console.log('🌱 Database seeded with Surya\'s GitHub and local projects');
};
seedData();

// Message Schema for Contact Form
const MessageSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    subject: String,
    message: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

const Message = mongoose.model('Message', MessageSchema);

// API Routes
app.post('/api/messages', async (req, res) => {
    console.log('📩 Incoming message:', req.body);
    const newMessage = new Message(req.body);
    try {
        const savedMessage = await newMessage.save();
        res.status(201).json({ success: true, data: savedMessage });
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
    }
});

app.get('/api/projects', async (req, res) => {
    try {
        const projects = await Project.find().sort({ createdAt: -1 });
        res.json(projects);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.post('/api/projects', async (req, res) => {
    const project = new Project(req.body);
    try {
        const savedProject = await project.save();
        res.status(201).json(savedProject);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

app.listen(PORT, () => {
    console.log(`🚀 Portfolio Backend running on http://localhost:${PORT}`);
});
