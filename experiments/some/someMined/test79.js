





var callbackArguments = [];
var argument1 = function (haystack) {
 callbackArguments.push(arguments) 

    return contains(haystack, needle);
};
var argument2 = null;
var argument3 = null;
var argument4 = function (pathRe) {
 callbackArguments.push(arguments) 

    return pathRe.test(path);
};
var argument5 = null;
var argument6 = r_0;
var argument7 = function (prefix) {
 callbackArguments.push(arguments) 

    return inputTrimmed.indexOf(prefix) === 0;
};
var argument8 = false;
var argument9 = {"618":627,"-1":9.981132669994919e+307,"":783};
var argument10 = function (module) {
 callbackArguments.push(arguments) 

    return ngDeps.modules[module].indexOf(dependency) > -1;
};
var argument11 = {};
var base_0 = ["e%z4`j","!","Ec","|$ite","R","("]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["e%z4`j","!","Ec","|$ite","R","("]
var r_1= undefined
try {
r_1 = base_1.some(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["e%z4`j","!","Ec","|$ite","R","("]
var r_2= undefined
try {
r_2 = base_2.some(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["e%z4`j","!","Ec","|$ite","R","("]
var r_3= undefined
try {
r_3 = base_3.some(argument10,argument11)
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
require("fs").writeFileSync("./experiments/some/someMined/test79.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)