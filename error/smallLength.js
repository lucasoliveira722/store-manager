const smallLength = (message) => ({
  message,
  statusCode: 422,
  stack: (Error()).stack,
});

module.exports = smallLength;