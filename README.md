# Mini Chat App

This project demonstrates basic MongoDB operations using Node.js. It is structured for learning and experimentation with MongoDB, including CRUD operations and simple models.

## Project Structure

- `index.js`: Main entry point for MongoDB operations.
- `init.js`: Initialization script for setting up the database.
- `models/`: Contains Mongoose models (e.g., `chat.js`).
- `public/`: Static assets (e.g., `style.css`).
- `views/`: EJS templates for rendering pages (`edit.ejs`, `index.ejs`, `new.ejs`).
- `package.json`: Project dependencies and scripts.

## Features

- Connects to MongoDB using Mongoose
- Basic CRUD operations for chat messages
- EJS templating for views
- Simple styling with CSS

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Set up MongoDB:**
   Make sure MongoDB is running locally or update the connection string in `index.js`.
3. **Run the project:**
   ```bash
   node index.js
   ```

## Usage

- Visit the app in your browser (default: `http://localhost:8080`)
- Add, edit, and delete chat messages

## License

This project is for educational purposes.
