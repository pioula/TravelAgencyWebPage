/* eslint-disable import/extensions */
import express from 'express';

import tripIdRoute from '../routes/tripId/tripId.mjs';
import helloWorldRoute from '../routes/stronaTestowa/helloWorld.mjs';
import weekIdRoute from '../routes/weekId/weekId.mjs';
import tripqRoute from '../routes/tripq/tripq.mjs';

const app = express();

app.set('views', 'src\\views');
app.set('view engine', 'pug');

app.get(tripqRoute.path, tripqRoute.callback);
app.get(tripIdRoute.path, tripIdRoute.callback);
app.get(weekIdRoute.path, weekIdRoute.callback);
app.get(helloWorldRoute.path, helloWorldRoute.callback);

app.listen(8080);

export default app;
