const smallLength = (message) => ({
  message,
  code: 409,
  stack: (Error()).stack,
});

module.exports = smallLength;