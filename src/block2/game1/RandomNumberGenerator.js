RandomNumberGenerator = function () {

};

RandomNumberGenerator.prototype = {
  getRandomNaturalNumber: function () {
    // Returns a Number between 0 and 9
    return [
      '',
      Math.floor(Math.random()*10)
    ];
  },
  twoIntegersSumOperationInRange: function(min, max){
    answer = null;
    while(answer > max || answer < min) {
      randomNumber1 = (Math.random() * (max - min)) + min;
      randomNumber2 = (Math.random() * (max - min)) + min;
      randomNumber1 = parseInt(randomNumber1);
      randomNumber2 = parseInt(randomNumber2);

      answer = randomNumber1 + randomNumber2;
    }

    return [
      ( randomNumber1 + " + " + randomNumber2),
      answer
    ];
  }
};