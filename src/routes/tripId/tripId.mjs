const tripIdRoute = {
  path: '/trip/:id',
  callback: (req, res) => {
    res.render('tripId', { title: 'Hey', message: 'Hello' });
  },
};

export default tripIdRoute;
