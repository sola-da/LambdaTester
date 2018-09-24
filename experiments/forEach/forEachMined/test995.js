





var callbackArguments = [];
var argument1 = function (prefix) {
 callbackArguments.push(arguments) 

    isUnitlessNumber[prefixKey(prefix, prop)] = isUnitlessNumber[prop];
};
var argument2 = function (p) {
 callbackArguments.push(arguments) 

    paramNames[p] = true;
};
var argument3 = function (q) {
 callbackArguments.push(arguments) 

    if (Object.hasOwnProperty.call(vers, q))
        ver.push(vers[q]);
};
var argument4 = true;
var argument5 = function (ts) {
 callbackArguments.push(arguments) 

    ts.length = 0;
};
var argument6 = r_0;
var argument7 = 7.83390837956328e+307;
var base_0 = [607]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [607]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [607]
var r_2= undefined
try {
r_2 = base_2.forEach(argument3,argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [607]
var r_3= undefined
try {
r_3 = base_3.forEach(argument5,argument6,argument7)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test995.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)