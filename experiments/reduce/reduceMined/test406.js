





var callbackArguments = [];
var argument1 = function (a, b) {
 callbackArguments.push(arguments) 

    return a + b;
};
var argument2 = function (obj, item) {
 callbackArguments.push(arguments) 

    obj[item] = 1;
    return obj;
};
var argument3 = ["e"];
var argument4 = function (result, key) {
 callbackArguments.push(arguments) 

    var pair = cb(obj[key], key, obj);
    result[pair[0]] = pair[1];
    return result;
};
var argument5 = "";
var argument6 = function (memo, value) {
 callbackArguments.push(arguments) 

    return memo.concat(Array.isArray(value) ? flatten(value) : value);
};
var argument7 = [82,403,627,607,607];
var argument8 = null;
var base_0 = [242,783,0,25,-1,0,242,1.7976931348623157e+308,893]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [242,783,0,25,-1,0,242,1.7976931348623157e+308,893]
var r_1= undefined
try {
r_1 = base_1.reduce(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [242,783,0,25,-1,0,242,1.7976931348623157e+308,893]
var r_2= undefined
try {
r_2 = base_2.reduce(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [242,783,0,25,-1,0,242,1.7976931348623157e+308,893]
var r_3= undefined
try {
r_3 = base_3.reduce(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/reduce/reduceMined/test406.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)