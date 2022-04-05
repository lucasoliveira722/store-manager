const smallLength = (message) => ({
  message,
  statusCode: 409,
  stack: (Error()).stack,
});

module.exports = smallLength;