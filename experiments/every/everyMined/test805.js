





var callbackArguments = [];
var argument1 = function (other) {
 callbackArguments.push(arguments) 

    return _.contains(other, item);
};
var argument2 = "";
var argument3 = function () {
 callbackArguments.push(arguments) 

    return false;
};
var argument4 = false;
var argument5 = null;
var argument6 = function (dep) {
 callbackArguments.push(arguments) 

    return list[dep];
};
var argument7 = false;
var argument8 = function (x) {
 callbackArguments.push(arguments) 

    return x;
};
var argument9 = {"969":"","P|H":"","":"Du","F":"[","-1":"7(rJ8"};
var base_0 = ["Hqbw","]M","z4;","AR","(J"]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["Hqbw","]M","z4;","AR","(J"]
var r_1= undefined
try {
r_1 = base_1.every(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["Hqbw","]M","z4;","AR","(J"]
var r_2= undefined
try {
r_2 = base_2.every(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["Hqbw","]M","z4;","AR","(J"]
var r_3= undefined
try {
r_3 = base_3.every(argument8,argument9)
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
require("fs").writeFileSync("./experiments/every/everyMined/test805.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)