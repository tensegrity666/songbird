import express from 'express';
import fetch from 'node-fetch';

const app = express();
const port = 8000;

app.get('/query/:request', (req, res) => {
  const { request } = req.params;

  fetch(`https://www.xeno-canto.org/api/2/recordings?query=${request}`)
    .then((response) => response.json())
    .then((data) => {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Headers', '*');
      res.send(data);
    })
});

app.listen(port, () => console.log(`listen port ${port}`))