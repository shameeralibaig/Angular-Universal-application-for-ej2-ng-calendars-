const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

const api = require('./server/routes/api');


const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

app.use('/api', api);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
  });

  app.get('/getinitdata', function (req, res) {
    res.send('test data');
  });
  
  /**
   * Get port from environment and store in Express.
   */
  const port = process.env.PORT || '3000';
  app.set('port', port);
  
  /**
   * Create HTTP server.
   */
  const server = http.createServer(app);
  
  /**
   * Listen on provided port, on all network interfaces.
   */
  server.listen(port, () => console.log(`API running on localhost:${port}`));