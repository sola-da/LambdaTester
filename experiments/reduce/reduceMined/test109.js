





var callbackArguments = [];
var argument1 = function (previousValue, currentValue) {
 callbackArguments.push(arguments) 

    return previousValue + currentValue;
};
var argument2 = false;
var argument3 = false;
var argument4 = function (max, depName) {
 callbackArguments.push(arguments) 

    return data[depName] > max ? data[depName] : max;
};
var argument5 = false;
var argument6 = false;
var argument7 = function (params, paramName) {
 callbackArguments.push(arguments) 

    params[paramName] = rootParams[paramName];
    return params;
};
var argument8 = null;
var argument9 = {"100":"","":"","MU":"Zg","f":"","OZ":7.282750732095509e+307};
var argument10 = function (transformEndLength, op) {
 callbackArguments.push(arguments) 

    return transformEndLength + op.getLength();
};
var base_0 = [823,1.7976931348623157e+308,823,100,843,627]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [823,1.7976931348623157e+308,823,100,843,627]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [823,1.7976931348623157e+308,823,100,843,627]
var r_2= undefined
try {
r_2 = base_2.reduce(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [823,1.7976931348623157e+308,823,100,843,627]
var r_3= undefined
try {
r_3 = base_3.reduce(argument10)
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
require("fs").writeFileSync("./experiments/reduce/reduceMined/test109.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)