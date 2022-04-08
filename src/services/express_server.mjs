/* eslint-disable import/extensions */
import express from 'express';

import tripIdRoute from '../pages/trip/services/trip_id.mjs';
import helloWorldRoute from '../pages/helloWorldExpress/helloWorld.mjs';

const app = express();

app.get(tripIdRoute.path, tripIdRoute.callback);
app.get(helloWorldRoute.path, helloWorldRoute.callback);

app.listen(8080);

export default app;
