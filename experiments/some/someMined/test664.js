





var callbackArguments = [];
var argument1 = function (ban) {
 callbackArguments.push(arguments) 

    return ban.mask === mask;
};
var argument2 = false;
var argument3 = function (eg) {
 callbackArguments.push(arguments) 

    return eg.hasChanges();
};
var argument4 = r_0;
var argument5 = null;
var argument6 = function (suffix) {
 callbackArguments.push(arguments) 

    return inputTrimmed.indexOf(suffix, inputTrimmed.length - suffix.length) !== -1;
};
var argument7 = function (token) {
 callbackArguments.push(arguments) 

    return token.color;
};
var base_0 = ["I","s(S:C",-100,"j;","P",655,"^",893,595]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["I","s(S:C",-100,"j;","P",655,"^",893,595]
var r_1= undefined
try {
r_1 = base_1.some(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["I","s(S:C",-100,"j;","P",655,"^",893,595]
var r_2= undefined
try {
r_2 = base_2.some(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["I","s(S:C",-100,"j;","P",655,"^",893,595]
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
require("fs").writeFileSync("./experiments/some/someMined/test664.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)