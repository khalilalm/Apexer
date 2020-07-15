const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');

const app = express();
dotenv.config({ path: './config.env' })
app.use(cors())

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Profile and Rank routes
app.use('/api/v1/profile', require('./routes/profile'));
app.use('/api/v1/rank', require('./routes/rank'));
// Handle production
if (process.env.NODE_ENV ==="production"){
  app.use(express.static('apexer/build'))
  app.get('*', (req,res) => {
    res.sendFile(path.resolve(__dirname, 'apexer', 'build', index.html))

  })
}

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`);
});