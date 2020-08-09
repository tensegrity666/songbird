import express from 'express';
import fetch from 'node-fetch';

const app = express();

app.get('/query/:request', (req, res) => {
  const { request } = req.params;

  app.use(express.static('static'));

  fetch(`https://www.xeno-canto.org/api/2/recordings?query=${request}`)
    .then((response) => response.json())
    .then((data) => {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Headers', '*');
      res.send(data);
    });
});

app.listen(process.env.PORT || 8000, () => console.log(`listen port ${process.env.PORT}`));
