import express from 'express';

import tripDescriptionController from '../controllers/tripDescription.controller.mjs';

const tripDescriptionRouter = express.Router();

tripDescriptionRouter.get('/query', tripDescriptionController.getQueryDescription);

tripDescriptionRouter.get('/:trip_id', tripDescriptionController.getDescription);

tripDescriptionRouter.get('/:trip_id/week/:week', tripDescriptionController.getWeekDescription);

export default tripDescriptionRouter;
