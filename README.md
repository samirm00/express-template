# Express Template

Welcome to the Express Template repository, designed to kickstart your Express.js applications with predefined middleware, public assets, routes, utility functions, and a main server file (`index.js`).

## Project Structure

```md
express-template/
│
├── public/
│ └── css/
│ └── styles.css
│
├── routes/
│ └── user.js
│
├── utils/
│ ├── validatePassword.js
│ ├── validateEmail.js
│ └── matchPasswords.js
│
├── middleware/
│ └── logger.js
│
├── .babelrc
├── .gitignore
├── package.json
├── README.md
└── index.js
```

## Getting Started

To use this template:

1. Use this template to create a new repository.

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your environment variables:

   ```bash
   PORT=5002
   ```

## Scripts

This template includes the following npm scripts in `package.json`:

- `start`: Start the Express server with node.

  ```bash
  npm start
  ```

- `dev`: Start the Express server with Nodemon for automatic reloading during development.

  ```bash
  npm run dev
  ```

## Middleware

Middleware functions, such as logging HTTP requests, are located in the `middleware` directory.

Example `logger.js` using `export`:

```javascript
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

export default logger;
```

To use middleware in your application (`index.js`):

```javascript
import express from 'express';
import logger from './middleware/logger.js';

const app = express();

app.use(logger);
```

## Public Assets

Public assets like CSS files are stored in the `public` directory.

Example `styles.css`:

```css
body {
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
}
```

To serve static files in your application (`index.js`):

```javascript
import express from 'express';

const app = express();

app.use(express.static('public'));
```

## Routes

Routes are defined in the `routes` directory.

Example `user.js` using `export`:

```javascript
import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  // Handle GET /user route
  res.send('User route');
});

export default router;
```

To use routes in your application (`index.js`):

```javascript
import express from 'express';
import userRouter from './routes/user.js';

const app = express();

app.use('/user', userRouter);
```

## Utility Functions

Utility functions are located in the `utils` directory for various tasks.

Example `validatePassword.js` using `export`:

```javascript
const validatePassword = (password) => {
  // Validation logic
};

export default validatePassword;
```

To use utility functions in your application:

```javascript
import  validatePassword  from './utils/validatePassword.js';

const isValid = validatePassword('password123');
```

## Main Server File

The main server file (`index.js`) initializes the Express application, sets up middleware, routes, and starts the server.

Example `index.js` using `import`:

```javascript
import express from 'express';
import logger from './middleware/logger.js';
import userRouter from './routes/user.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(logger);
app.use(express.static('public'));
app.use('/user', userRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
```
