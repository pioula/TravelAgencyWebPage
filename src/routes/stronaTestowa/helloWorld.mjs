const helloWorldRoute = {
  path: '/strona-testowa',
  callback: (req, res) => {
    console.log('Hello World!');
    res.end();
  },
};

export default helloWorldRoute;
