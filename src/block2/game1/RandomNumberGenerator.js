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
  },
  twoIntegersDiffOperationInRange: function (min, max) {
    answer = null;
    answer = this.getRandomNaturalNumber()[1];
    console.log(this.getRandomNaturalNumber()[1]);
    if(answer > 5) {
      randomNumber1 = 10;
      randomNumber2 = 10 - answer;
    } else {
      randomNumber1 = 10 - answer;
      randomNumber2 = randomNumber1 - answer;
    }
    return [
      ( randomNumber1 + " - " + randomNumber2),
      answer
    ];
  },
  threeIntegersSumInRange: function(){
    randomNumber1 = Math.floor(Math.random()*4);
    randomNumber2 = Math.floor(Math.random()*4);
    randomNumber3 = Math.floor(Math.random()*4);
    answer = randomNumber1 + randomNumber2 + randomNumber3;
    return [
      (randomNumber1 + " + " + randomNumber2 + " + " + randomNumber3),
      answer,
    ];
  },
  threeIntegersDiff: function(){
    randomNumber1 = 10;
    randomNumber2 = Math.floor(Math.random()*6);
    randomNumber3 = Math.floor(Math.random()*6);
    answer = randomNumber1 - randomNumber2 - randomNumber3;
    return [
      (randomNumber1 + " - " + randomNumber2 + " - " + randomNumber3),
      answer,
    ];
  },
  threeIntegersOperationWithSumAndDif: function(){
    randomNumber1 = 4;
    randomNumber2 = Math.floor(Math.random()*6);
    randomNumber3 = Math.floor(Math.random()*5);
    answer = randomNumber1 + randomNumber2 - randomNumber3;
    return [
      (randomNumber1 + " + " + randomNumber2 + " - " + randomNumber3),
      answer,
    ];
  },
  twoFloatsSumOperationInRange: function(min, max){
    // Force it to enter loop
    answer = min - 1;
    while((answer + 0.5 > max) || (answer - 0.5) < min) { // answer out of bounds
      randomNumber1 = this._round(
        (Math.random() * (max) - min) + min,
        0.5
      );
      randomNumber2 = this._round(
        (Math.random() * (max) - min) + min,
        0.5
      );
      answer = randomNumber1 + randomNumber2;
    }

    return [
      (randomNumber1 + " + " + randomNumber2),
      answer
    ];
  },
  operation68 : function () {
    return [
      ("9.6 -  3.2"),
      6.4
    ];
  },
  _round: function(number, numberToRound) {
    var rest = number%numberToRound;
    if (rest <= (numberToRound/2)) {
      return number-rest;
    } else {
      return number+numberToRound-rest;
    }
  }
};