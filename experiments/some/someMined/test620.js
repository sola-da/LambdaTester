





var callbackArguments = [];
var argument1 = function (eg) {
 callbackArguments.push(arguments) 

    return eg.hasChanges();
};
var argument2 = null;
var argument3 = "";
var argument4 = function (pathRe) {
 callbackArguments.push(arguments) 

    return pathRe.test(path);
};
var argument5 = false;
var argument6 = function (eg) {
 callbackArguments.push(arguments) 

    return eg.hasChanges();
};
var argument7 = null;
var argument8 = 3.6036953288857663e+307;
var argument9 = function (isCustomAttributeFn) {
 callbackArguments.push(arguments) 

    return isCustomAttributeFn.call(null, attributeName);
};
var argument10 = false;
var argument11 = null;
var base_0 = ["bAw65?Np","&R","=","O","bx","v2"]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["bAw65?Np","&R","=","O","bx","v2"]
var r_1= undefined
try {
r_1 = base_1.some(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["bAw65?Np","&R","=","O","bx","v2"]
var r_2= undefined
try {
r_2 = base_2.some(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["bAw65?Np","&R","=","O","bx","v2"]
var r_3= undefined
try {
r_3 = base_3.some(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/some/someMined/test620.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)