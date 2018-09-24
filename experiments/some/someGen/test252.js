





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[2.249941463060761e+307] = {"100":"L","823":"","893":"","1.4879577901214405e+308":"t","":"","2.587602547960195e+307":"","zB":969,"*":49,"8.416487540845967e+307":""}
base_0[5] = ["v","x","@x","pC","qn","d","G@","*`H>Pbz","&"]
base_0[7] = 2.0153112153635988e+307
return a+b/c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[2] = [100]
return a/b+c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[7] = null
return a/b/c
};
var argument4 = false;
var argument5 = -1;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[2] = [122,213,242]
return a*b-c
};
var base_0 = ["(","$","(","Q","I","5T","mC","B","#BqnG#Z&"]
var r_0= undefined
try {
r_0 = base_0.some(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["(","$","(","Q","I","5T","mC","B","#BqnG#Z&"]
var r_1= undefined
try {
r_1 = base_1.some(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["(","$","(","Q","I","5T","mC","B","#BqnG#Z&"]
var r_2= undefined
try {
r_2 = base_2.some(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["(","$","(","Q","I","5T","mC","B","#BqnG#Z&"]
var r_3= undefined
try {
r_3 = base_3.some(argument6)
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
require("fs").writeFileSync("./experiments/some/someGen/test252.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)