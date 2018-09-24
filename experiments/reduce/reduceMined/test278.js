





var callbackArguments = [];
var argument1 = function (all, key) {
 callbackArguments.push(arguments) 

    all[key] = {};
    self._setTarget(filters[key], all[key]);
    return all;
};
var argument2 = null;
var argument3 = "r*";
var argument4 = function (prev, next) {
 callbackArguments.push(arguments) 

    var mp = multiplier(prev), mn = multiplier(next);
    return mp > mn ? mp : mn;
};
var argument5 = [823,893,59,618,714,595];
var argument6 = 969;
var argument7 = function (all, key) {
 callbackArguments.push(arguments) 

    all[key] = {};
    self._setTarget(filters[key], all[key]);
    return all;
};
var argument8 = function (count, i) {
 callbackArguments.push(arguments) 

    return count + calls[i];
};
var argument9 = true;
var argument10 = {"242":242,"":"B","1.7976931348623157e+308":"<Au0","4.1096875961896693e+307":9.379741277223074e+306,"Y":1.5762847553028782e+308};
var base_0 = ["V","{","$o","e5","H","Z","D7S","3Q","E","("]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["V","{","$o","e5","H","Z","D7S","3Q","E","("]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["V","{","$o","e5","H","Z","D7S","3Q","E","("]
var r_2= undefined
try {
r_2 = base_2.reduce(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["V","{","$o","e5","H","Z","D7S","3Q","E","("]
var r_3= undefined
try {
r_3 = base_3.reduce(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/reduce/reduceMined/test278.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)