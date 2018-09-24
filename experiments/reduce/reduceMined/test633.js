





var callbackArguments = [];
var argument1 = function (length, delta) {
 callbackArguments.push(arguments) 

    return length + delta.getLength();
};
var argument2 = {"126":100,"655":4.453773288167034e+307,"893":9.049759773852002e+307,"1.3555749636832502e+308":"3aA","":"Cj","4.894431419864256e+307":"","[e":100,"1.2870770546619427e+308":"","1.3407979130863208e+308":9.44575866993825e+307};
var argument3 = function (count, i) {
 callbackArguments.push(arguments) 

    return count + calls[i];
};
var argument4 = null;
var argument5 = function (acc, join) {
 callbackArguments.push(arguments) 

    acc.push(makePunc(punc, _.first(join)));
    Array.prototype.push.apply(acc, join);
    return acc;
};
var argument6 = function (memo, val) {
 callbackArguments.push(arguments) 

    return memo ? memo[val] : undefined;
};
var argument7 = true;
var base_0 = ["s"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["s"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["s"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["s"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument6,argument7)
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
require("fs").writeFileSync("./experiments/reduce/reduceMined/test633.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)