/* eslint-disable implicit-arrow-linebreak */
const notFound = (req, res) =>
  res.status(404).send('<h1>Route does not exist!⛔</h1>');

module.exports = notFound;
