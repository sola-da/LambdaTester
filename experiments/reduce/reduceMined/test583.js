





var callbackArguments = [];
var argument1 = function (a, b) {
 callbackArguments.push(arguments) 

    return a * b;
};
var argument2 = function (length, op) {
 callbackArguments.push(arguments) 

    return length + op.getLength();
};
var argument3 = function (promise, hook) {
 callbackArguments.push(arguments) 

    return promise ? promise.then(hook) : hook();
};
var argument4 = r_1;
var argument5 = function (x, child) {
 callbackArguments.push(arguments) 

    return x + child.x;
};
var base_0 = ["$j","W","gl-","d"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["$j","W","gl-","d"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["$j","W","gl-","d"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument3,argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["$j","W","gl-","d"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument5)
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
require("fs").writeFileSync("./experiments/reduce/reduceMined/test583.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)