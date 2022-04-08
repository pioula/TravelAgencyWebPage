const tripqRoute = {
  path: '/tripq',
  callback: (req, res) => {
    if (req.query.trip_id && req.query.week) {
      res.status(200).render(
        'weekId',
        { id: `${req.query.trip_id}`, week: `${req.query.week}` },
      );
    } else if (req.query.trip_id) {
      res.status(200).render(
        'tripId',
        { id: `${req.query.trip_id}` },
      );
    } else {
      res.status(404).render('error');
    }
  },
};

export default tripqRoute;
