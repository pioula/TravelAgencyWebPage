const tripDescriptionController = {
  // localhost:port/trip/6
  getDescription: (req, res) => {
    res.status(200).render(
      'tripDescription',
      { trip_id: `${req.params.trip_id}` },
    );
  },
  // localhost:port/trip/6/week/7
  getWeekDescription: (req, res) => {
    res.status(200).render(
      'tripWeekDescription',
      { trip_id: `${req.params.trip_id}`, week: `${req.params.week}` },
    );
  },
  // localhost:port/trip/query?trip_id=6&week=8
  getQueryDescription: (req, res, next) => {
    if (req.query.trip_id && req.query.week) {
      res.status(200).render(
        'tripWeekDescription',
        { trip_id: `${req.query.trip_id}`, week: `${req.query.week}` },
      );
    } else if (req.query.trip_id) {
      res.status(200).render(
        'tripDescription',
        { trip_id: `${req.query.trip_id}` },
      );
    } else {
      next(404);
    }
  },
};

export default tripDescriptionController;
