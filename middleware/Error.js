const middlewareError = (err, _req, res, _next) => {
  if (err.statusCode) {
    return res.status(err.statusCode).json({ message: err.message });
  }

  console.log(err.message);
  res.status(500).json({ message: 'Erro interno do servidor' });
};

module.exports = middlewareError;