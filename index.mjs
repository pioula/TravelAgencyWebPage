/* eslint-disable import/extensions */

import express from 'express';

import helloWorldRouter from './src/routes/helloWorld.router.mjs';
import tripDescriptionRouter from './src/routes/tripDescription.router.mjs';

const app = express();
const port = process.env.PORT || 3000;

app.set('views', 'src\\views');
app.set('view engine', 'pug');

app.use(express.static('src\\public'));
app.use('/strona-testowa', helloWorldRouter);
app.use('/trip', tripDescriptionRouter);

app.listen(port, '0.0.0.0', () => {
  console.log(`Listening at http://localhost:${port}`);
});
