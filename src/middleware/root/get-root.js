const rootMiddleware = async (req, res, next) => {
  res.locals.message = 'root middleware done.';
  next();
};

export default rootMiddleware;