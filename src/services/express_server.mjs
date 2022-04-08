import express from 'express';

const app = express();
app.get('/strona-testowa', (req, res) => {
  setTimeout(res.status(200).send('Hello World!'), 10 * 1000);
});

app.listen(8080);
