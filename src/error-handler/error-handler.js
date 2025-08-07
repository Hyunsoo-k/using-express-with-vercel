const errorHandler = async (err, req, res, next) => {
  return res.send({ message: 'error occurred' });
};

export default errorHandler;