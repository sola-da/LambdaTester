





var callbackArguments = [];
var argument1 = function (item) {
 callbackArguments.push(arguments) 

    item.submitValue = true;
    item.allowBlank = false;
};
var argument2 = function (dp) {
 callbackArguments.push(arguments) 

    var newDp = new DataProperty(dp);
    newDp.validators = [];
    newDp.baseProperty = dp;
    this._addPropertyCore(newDp);
};
var argument3 = function _(key, value) {
 callbackArguments.push(arguments) 

    f(key);
};
var argument4 = r_2;
var argument5 = function (eventName) {
 callbackArguments.push(arguments) 

    $.fn[eventName] = function (callback) {
        return this.on(eventName, callback);
    };
};
var base_0 = [627,823,714,213]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [627,823,714,213]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [627,823,714,213]
var r_2= undefined
try {
r_2 = base_2.forEach(argument3,argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [627,823,714,213]
var r_3= undefined
try {
r_3 = base_3.forEach(argument5)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test584.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)