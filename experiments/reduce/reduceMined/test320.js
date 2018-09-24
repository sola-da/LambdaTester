





var callbackArguments = [];
var argument1 = function (length, op) {
 callbackArguments.push(arguments) 

    return length + op.getLength();
};
var argument2 = null;
var argument3 = function (prev, next) {
 callbackArguments.push(arguments) 

    var mp = multiplier(prev), mn = multiplier(next);
    return mp > mn ? mp : mn;
};
var argument4 = function (promise, hook) {
 callbackArguments.push(arguments) 

    return promise ? promise.then(hook) : hook();
};
var argument5 = function (prv, cur) {
 callbackArguments.push(arguments) 

    return prv + HLP.packMPI(cur);
};
var argument6 = true;
var argument7 = true;
var base_0 = ["mk","Fk+]d","9","c","<","V",",A","II","vwX","wX"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["mk","Fk+]d","9","c","<","V",",A","II","vwX","wX"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["mk","Fk+]d","9","c","<","V",",A","II","vwX","wX"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["mk","Fk+]d","9","c","<","V",",A","II","vwX","wX"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument5,argument6,argument7)
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
require("fs").writeFileSync("./experiments/reduce/reduceMined/test320.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)