const tripIdRoute = {
  path: '/trip/:id',
  callback: (req, res) => {
    console.log('Siema');
    res.end();
  },
};

export default tripIdRoute;
