function isMultipleOfThree(num) {
  if(typeof num !== 'number') {
    throw new Error('Wrong type passed');
  }
  return num % 3 === 0;
}

module.exports = {
  isMultipleOfThree
};

