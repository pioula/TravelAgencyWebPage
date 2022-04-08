const helloWorldController = {
  get: (req, res) => {
    console.log('Hello World');
    res.end();
  },
};

export default helloWorldController;
