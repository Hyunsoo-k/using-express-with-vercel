const postListMiddleware = async (req, res, next) => {
  res.locals.message = 'post-list middleware done.';
  next();
};

export default postListMiddleware;