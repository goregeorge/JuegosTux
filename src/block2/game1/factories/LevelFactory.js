LevelFactory = function () {
  // body...
};

LevelFactory.create = function (strategies) {
  return new LevelTemplate(strategies);
};
