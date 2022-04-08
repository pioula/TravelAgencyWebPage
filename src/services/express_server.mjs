/* eslint-disable import/extensions */
import express from 'express';

import tripIdRoute from '../routes/tripId/tripId.mjs';
import helloWorldRoute from '../routes/stronaTestowa/helloWorld.mjs';

const app = express();

app.set('views', 'src\\views');
app.set('view engine', 'pug');

app.get(tripIdRoute.path, tripIdRoute.callback);
app.get(helloWorldRoute.path, helloWorldRoute.callback);

app.listen(8080);

export default app;
