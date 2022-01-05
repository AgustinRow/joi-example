const testPostController = async (req, res, next) => {
  const { body } = req;
  res.status(201).json(body);
};

export default testPostController;
