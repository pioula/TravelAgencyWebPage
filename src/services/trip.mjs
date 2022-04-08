import express from 'express';

const app = express();
app.get('/wycieczka/:id', (req, res) => {
  
  res.end();
});

app.listen(8080);
