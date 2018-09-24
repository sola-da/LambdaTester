





var callbackArguments = [];
var argument1 = function (haystack) {
 callbackArguments.push(arguments) 

    return contains(haystack, needle);
};
var argument2 = true;
var argument3 = function (t) {
 callbackArguments.push(arguments) 

    return typeof t === 'object';
};
var argument4 = {"1.6122634510140385e+308":"|"};
var argument5 = function (inRole) {
 callbackArguments.push(arguments) 

    debug('isInRole() returns: %j', inRole);
    if (callback)
        callback(null, inRole);
};
var argument6 = null;
var argument7 = function (klass) {
 callbackArguments.push(arguments) 

    return $a.hasClass(klass);
};
var argument8 = {"1.2443388288581091e+308":"4","n|":1.7976931348623157e+308};
var argument9 = r_1;
var base_0 = ["t",213,"#","l","5aD|s","2","9","R]`"]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["t",213,"#","l","5aD|s","2","9","R]`"]
var r_1= undefined
try {
r_1 = base_1.some(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["t",213,"#","l","5aD|s","2","9","R]`"]
var r_2= undefined
try {
r_2 = base_2.some(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["t",213,"#","l","5aD|s","2","9","R]`"]
var r_3= undefined
try {
r_3 = base_3.some(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/some/someMined/test323.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)