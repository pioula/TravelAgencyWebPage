import express from 'express';

import helloWorldController from '../controllers/helloWorld.controller.mjs';

const helloWorldRouter = express.Router();

helloWorldRouter.get('/', helloWorldController.get);

export default helloWorldRouter;
