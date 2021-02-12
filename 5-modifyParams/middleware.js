const squareOfNumber = (req, res, next) => {
  const number = req.params.number;
  req.square = number * number;
  next();
};

module.exports = squareOfNumber;
