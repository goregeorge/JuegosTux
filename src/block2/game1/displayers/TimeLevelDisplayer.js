TimeLevelDisplayer = function(){
    commonDisplayer = new CommonInfoDisplayer();
    timeDisplayer   = new TimeDisplayer();
};

TimeLevelDisplayer.prototype = {
  displayInfo : function (context, name) {
    timeDisplayer.displayTime(context);
    return commonDisplayer.displayInfo(context, name);
  }

};