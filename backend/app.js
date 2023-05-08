// Import required packages
const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');
require('dotenv').config();
const port = process.env.APPPORT || 3000;

// Create an instance of the Express application
const app = express();

// Set up middleware
app.use(bodyParser.json());

// test env vars
//console.log(process.env);

// PostgreSQL connection pool
const pool = new Pool({
  user: process.env.PGUSER || 'your-username',
  password: process.env.PGPASSWORD || 'your-password',
  host: process.env.PGHOST || 'localhost',
  port: process.env.PGPORT || 5432,
  database: process.env.PGDATABASE || 'your-database-name'
});

// Routes

// Get all items
app.get('/items', async (req, res) => {
  try {
    const queryResult = await pool.query('SELECT * FROM items');
    const items = queryResult.rows;
    res.json(items);
  } catch (error) {
    console.error('Failed to fetch items:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Get a specific item by ID
app.get('/items/:id', async (req, res) => {
  const itemId = req.params.id;
  try {
    const queryResult = await pool.query('SELECT * FROM items WHERE id = $1', [itemId]);
    const item = queryResult.rows[0];
    if (!item) {
      res.status(404).send('Book not found');
    } else {
      res.json(item);
    }
  } catch (error) {
    console.error('Failed to fetch the item:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Create a new item
app.post('/items', async (req, res) => {
  const { title, author } = req.body;
  try {
    await pool.query('INSERT INTO items (title, author) VALUES ($1, $2)', [title, author]);
    res.status(201).send('Book created successfully');
  } catch (error) {
    console.error('Failed to create the item:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Update an existing item
app.put('/items/:id', async (req, res) => {
  const itemId = req.params.id;
  const { title, author } = req.body;
  try {
    const queryResult = await pool.query('UPDATE items SET title = $1, author = $2 WHERE id = $3', [title, author, itemId]);
    if (queryResult.rowCount === 0) {
      res.status(404).send('Book not found');
    } else {
      res.status(200).send('Book updated successfully');
    }
  } catch (error) {
    console.error('Failed to update the item:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Delete an item
app.delete('/items/:id', async (req, res) => {
  const itemId = req.params.id;
  try {
    const queryResult = await pool.query('DELETE FROM items WHERE id = $1', [itemId]);
    if (queryResult.rowCount === 0) {
      res.status(404).send('Book not found');
    } else {
      res.status(200).send('Book deleted successfully');
    }
  } catch (error) {
    console.error('Failed to delete the item:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port ' + port + '...');
});
