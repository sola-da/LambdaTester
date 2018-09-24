





var callbackArguments = [];
var argument1 = function (acc, join) {
 callbackArguments.push(arguments) 

    acc.push(makePunc(punc, _.first(join)));
    Array.prototype.push.apply(acc, join);
    return acc;
};
var argument2 = 1.0918099661971282e+308;
var argument3 = function (a, b) {
 callbackArguments.push(arguments) 

    return (a || '').toString() + (b || '').toString();
};
var argument4 = "7";
var argument5 = function (prv, cur) {
 callbackArguments.push(arguments) 

    return prv + HLP.packMPI(cur);
};
var argument6 = true;
var argument7 = function (sum, x) {
 callbackArguments.push(arguments) 

    return sum + x;
};
var argument8 = r_3;
var argument9 = r_2;
var base_0 = ["(","6v","[AB","n","U","i;$oh","C","zgk"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["(","6v","[AB","n","U","i;$oh","C","zgk"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["(","6v","[AB","n","U","i;$oh","C","zgk"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["(","6v","[AB","n","U","i;$oh","C","zgk"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/reduce/reduceMined/test638.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)