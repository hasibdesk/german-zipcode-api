const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const fs = require('fs');

require('dotenv').config();

// Create express app
const app = express();

// Apply middlewates
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Routes
fs.readdirSync('./routes').map((route) => app.use('/api', require(`./routes/${route}`)));

// Port
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Server running at : http://localhost:${PORT}`));
