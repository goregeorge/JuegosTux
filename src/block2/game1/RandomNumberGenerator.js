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
};