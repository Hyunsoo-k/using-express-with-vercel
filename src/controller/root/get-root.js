const getRoot = async (req, res) => {
  const { message } = res.locals;
  return res.status(200).send({ message });
};

export default getRoot;