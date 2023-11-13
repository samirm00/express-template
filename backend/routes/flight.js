import express from 'express';

const router = express.Router();

import flightControllers from '../controllers/flight.js';
import verifyToken from '../middleware/verifyToken.js';

// routes

export default router;
