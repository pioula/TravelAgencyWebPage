const tripIdRoute = {
  path: '/trip/:trip_id',
  callback: (req, res) => {
    res.status(200).render('tripId', { id: `${req.params.trip_id}` });
  },
};

export default tripIdRoute;
