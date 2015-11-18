NormalInitializer = function(){
  this.commonInitializer = new CommonInitializer();
};

NormalInitializer.prototype = {
  init : function (context) {
    this.commonInitializer.init(context);
  }

};