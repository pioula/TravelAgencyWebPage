import express from 'express';

import tripDescriptionController from '../controllers/tripDescription.controller.mjs';

const tripDescriptionRouter = express.Router();

tripDescriptionRouter.get('/query', tripDescriptionController.getQueryDescription);

tripDescriptionRouter.get('/:trip_id(\\d+)', tripDescriptionController.getDescription);

tripDescriptionRouter.get('/:trip_id(\\d+)/week/:week(\\d+)', tripDescriptionController.getWeekDescription);

export default tripDescriptionRouter;
