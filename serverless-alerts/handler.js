'use strict';

module.exports.hello = async (event) => {
  throw new Error('Throwing error on purpose!');
};
