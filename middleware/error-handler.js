const errorHandlerMiddleware = (err, req, res, next) => {
  res.status(500).json({ msg: err });
  next();
};

module.exports = errorHandlerMiddleware;
