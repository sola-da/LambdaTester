





var callbackArguments = [];
var argument1 = function (length, op) {
 callbackArguments.push(arguments) 

    return length + op.getLength();
};
var argument2 = null;
var argument3 = false;
var argument4 = function (acc, join) {
 callbackArguments.push(arguments) 

    acc.push(makePunc(punc, _.first(join)));
    Array.prototype.push.apply(acc, join);
    return acc;
};
var argument5 = function (sum, value) {
 callbackArguments.push(arguments) 

    return sum + value;
};
var argument6 = true;
var argument7 = {"1.7976931348623157e+308":242};
var argument8 = function (result, child, idx) {
 callbackArguments.push(arguments) 

    var name = child.getKey(idx);
    result[name] = child;
    return result;
};
var base_0 = [595,627,595,-100,627]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [595,627,595,-100,627]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [595,627,595,-100,627]
var r_2= undefined
try {
r_2 = base_2.reduce(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [595,627,595,-100,627]
var r_3= undefined
try {
r_3 = base_3.reduce(argument8)
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
require("fs").writeFileSync("./experiments/reduce/reduceMined/test826.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)