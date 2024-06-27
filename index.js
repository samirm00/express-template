import express from 'express';
import dotenv from 'dotenv';

// import routes


// import middleware


// Load environment variables

// Initialize express
const app = express();

// Use middleware


// Use routes


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
