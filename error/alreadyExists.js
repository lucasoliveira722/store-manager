const alreadyExists = (message) => ({
  message,
  statusCode: 409,
  stack: (Error()).stack,
});

module.exports = alreadyExists;