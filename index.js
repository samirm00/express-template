import express from 'express';
import dotenv from 'dotenv';

// import routes
import userRoutes from './routes/user.js';

// import middleware
import logger from './middleware/logger.js';

// Load environment variables
dotenv.config();
const PORT = process.env.PORT || 5009;

// Initialize express
const app = express();

// Use middleware
app.use(logger);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use routes
app.use(userRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ message: 'Internal Server Error' });
});

// 404 Not Found handling
app.use('*', (req, res) => {
    res.status(404).json({ message: 'Page is not found' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
