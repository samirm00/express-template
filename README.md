# Express Template

Welcome to the Express Template repository. This template is designed to help you kickstart your Express.js applications with a well-structured project setup, including predefined middleware, public assets, routes, utility functions, and a main server file (`index.js`).

## Project Structure

The project is organized as follows:

```plaintext
express-template/
│
├── config/
│   └── db.js
│
├── controllers/
│   └── user.js
│
├── middleware/
│   └── logger.js
│
├── models/
│   └── user.js
│
├── public/
│   └── css/
│       └── styles.css
│
├── routes/
│   └── user.js
│
├── utils/
│   ├── validatePassword.js
│   ├── validateEmail.js
│   └── matchPasswords.js
│
├── .babelrc
├── .env
├── .gitignore
├── .prettierrc.json
├── index.js
├── package.json
├── README.md
```

## Getting Started

To get started with this template, follow these steps:

1. **Create a new repository** using this template.
2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Set up environment variables**:
   Create a `.env` file in the root directory and add your environment variables:

   ```plaintext
   PORT=5002
   ```

## Scripts

This template includes the following npm scripts defined in `package.json`:

- **Start the server**:

  ```bash
  npm start
  ```

- **Start the server in development mode** with automatic reloading using Nodemon:

  ```bash
  npm run dev
  ```

## Configuration

Database connection configurations and other settings can be managed in the `config` directory. Example configuration for the database:

```javascript
// db.js
import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection failed', error);
    process.exit(1);
  }
};

export default connectDB;
```

## Controllers

Controllers handle the logic for different routes. Each controller is placed in the `controllers` directory.

Example `user.js`:

```javascript
// user.js
const userControllers = {
  getUser : (req, res) => {
  res.send('Get user');
  },
  createUser : (req, res) => {
    res.send('Create user');
  }
}

export default userControllers;
```

## Middleware

Middleware functions are used to process requests. They are located in the `middleware` directory.

Example `logger.js`:

```javascript
// logger.js
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

export default logger;
```

Usage in `index.js`:

```javascript
import express from 'express';
import logger from './middleware/logger.js';

const app = express();

app.use(logger);
```

## Models

Models define the structure of the data to be stored in the database. They are located in the `models` directory.

Example `user.js`:

```javascript
// user.js
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const User = mongoose.model('User', userSchema);

export default User;
```

## Public Assets

Static files such as CSS are stored in the `public` directory.

Example `styles.css`:

```css
body {
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
}
```

Serving static files in `index.js`:

```javascript
import express from 'express';

const app = express();

app.use(express.static('public'));
```

## Routes

Routes are defined in the `routes` directory.

Example `user.js`:

```javascript
// user.js
import express from 'express';
import userControllers from '../controllers/user.js';

const router = express.Router();

router.get('/', userControllers.getUser);
router.post('/', userControllers.createUser);

export default router;
```

Usage in `index.js`:

```javascript
import express from 'express';
import userRouter from './routes/user.js';

const app = express();

app.use('/user', userRouter);
```

## Utility Functions

Utility functions are located in the `utils` directory.

Example `validatePassword.js`:

```javascript
// validatePassword.js
const validatePassword = (password) => {
  return password.length >= 8;
};

export default validatePassword;
```

Usage in your application:

```javascript
import validatePassword from './utils/validatePassword.js';

const isValid = validatePassword('password123');
```

## Main Server File

The main server file (`index.js`) initializes the Express application, sets up middleware, routes, and starts the server.

Example `index.js`:

```javascript
import express from 'express';
import logger from './middleware/logger.js';
import userRouter from './routes/user.js';
import connectDB from './config/db.js';

const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

app.use(logger);
app.use(express.static('public'));
app.use(express.json());
app.use('/user', userRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
```
