





var callbackArguments = [];
var argument1 = function (enumType) {
 callbackArguments.push(arguments) 

    return enumType.name === baseTypeName;
};
var argument2 = false;
var argument3 = function (suffix) {
 callbackArguments.push(arguments) 

    return inputTrimmed.indexOf(suffix, inputTrimmed.length - suffix.length) !== -1;
};
var argument4 = function (pathRe) {
 callbackArguments.push(arguments) 

    return pathRe.test(path);
};
var argument5 = false;
var argument6 = false;
var argument7 = function (el) {
 callbackArguments.push(arguments) 

    return el.num === 2 && el.char === 'B';
};
var base_0 = [893,"k",1.7976931348623157e+308,403,655,"X7-F","b"]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,"k",1.7976931348623157e+308,403,655,"X7-F","b"]
var r_1= undefined
try {
r_1 = base_1.some(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,"k",1.7976931348623157e+308,403,655,"X7-F","b"]
var r_2= undefined
try {
r_2 = base_2.some(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,"k",1.7976931348623157e+308,403,655,"X7-F","b"]
var r_3= undefined
try {
r_3 = base_3.some(argument7)
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
require("fs").writeFileSync("./experiments/some/someMined/test659.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)