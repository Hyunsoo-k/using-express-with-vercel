const postListMiddleware = (req, res) => {
  return res.send({ message: 'post-list middleware done.' });
};

export default postListMiddleware;