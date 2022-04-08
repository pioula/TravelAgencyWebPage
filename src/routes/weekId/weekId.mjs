const weekIdRoute = {
  path: '/trip/:trip_id/week/:week',
  callback: (req, res) => {
    res.render(
      'weekId',
      { id: `${req.params.trip_id}`, week: `${req.params.week}` },
    );
  },
};

export default weekIdRoute;
