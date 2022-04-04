const notFound = (message) => ({
  message,
  code: 404,
  stack: (Error()).stack,
});

module.exports = notFound;