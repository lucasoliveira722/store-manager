const smallLength = require('../../error/smallLength');

const nameLength = (name) => {
  if (name.length <= 5) {
    throw smallLength('Name\'s length can\'t be smaller than 5');
  }
};

module.exports = nameLength;