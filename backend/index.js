const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const sequelize = require('./config/database');
const Todo = require('./models/todo');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Sync database
sequelize.sync().then(() => console.log('Database synced'));

// Routes
app.get('/todos', async (req, res) => {
  const todos = await Todo.findAll();
  res.json(todos);
});

app.post('/todos', async (req, res) => {
  const todo = await Todo.create(req.body);
  res.json(todo);
});

// Add PUT and DELETE routes similarly...

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
