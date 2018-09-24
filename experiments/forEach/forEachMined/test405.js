





var callbackArguments = [];
var argument1 = function (cb) {
 callbackArguments.push(arguments) 

    cb();
};
var argument2 = null;
var argument3 = function (subFold) {
 callbackArguments.push(arguments) 

    fold.restoreRange(subFold);
    this.addFold(subFold);
};
var argument4 = false;
var argument5 = false;
var argument6 = function (triple) {
 callbackArguments.push(arguments) 

    n3 = n3 + triple.toString();
};
var argument7 = false;
var argument8 = false;
var argument9 = function (side) {
 callbackArguments.push(arguments) 

    var value = 0, sideValue = this[side];
    null != sideValue && (value = 'number' == typeof sideValue ? sideValue : sideValue.resolve('left' === side || 'right' === side ? width : height));
    sides[side] = value;
};
var argument10 = false;
var base_0 = [969]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [969]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [969]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [969]
var r_3= undefined
try {
r_3 = base_3.forEach(argument9,argument10)
}
catch(e) {
r_3= "Error"
}
function serialize(array){
return array.map(function(a){
if (a === null || a == undefined) return a;
var name = a.constructor.name;
if (name==='Object' || name=='Boolean'|| name=='Array'||name=='Number'||name=='String')
return JSON.stringify(a);
return name;
 });
}
setTimeout(function(){
require("fs").writeFileSync("./experiments/forEach/forEachMined/test405.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)