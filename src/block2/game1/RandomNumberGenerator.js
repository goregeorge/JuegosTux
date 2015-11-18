RandomNumberGenerator = function () {

};

RandomNumberGenerator.prototype = {
  getRandomNaturalNumber: function () {
    // Returns a Number between 0 and 9
    return Math.floor(Math.random()*10);
  }
};