// 案例2
var name2 = "The Window";
var object = {
　name2 : "My Object",
　getNameFunc : function(){
　return function(){
　　　return this.name2;
　  };
  }
};
console.log('案例2', object.getNameFunc());
console.log('案例22', object.getNameFunc()());
// 案例3
var name = "The Window";
var object = {
　name : "My Object",
　getNameFunc : function(){
    var that = this;
　  return function(){
　　　return that.name;
　  };
  }
};
console.log('案例3', object.getNameFunc()());