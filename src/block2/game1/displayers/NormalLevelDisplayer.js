NormalLevelDisplayer = function(){
    commonDisplayer = new CommonInfoDisplayer();
};

NormalLevelDisplayer.prototype = {
  displayInfo : function (context, name) {
    return commonDisplayer.displayInfo(context, name);
  }

};