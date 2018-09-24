





var callbackArguments = [];
var argument1 = null;
var argument2 = r_0;
var argument3 = r_0;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument1 = ">`E'E%"
argument2[1] = null
argument1[2] = null
return a/b/c*d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7 = false
return a/b-c-d
};
var argument6 = "=";
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[1] = "I"
argument8[2] = {"25":1.2356691359419033e+308,"82":"6","705":"","783":1.0153387767743506e+308,"R":"","":100,"9.971634338636989e+307":"<O","%":"","1.7891468621704844e+306":5.349365202107338e+307,"tP":""}
return a/b/c+d
};
var argument8 = null;
var argument9 = null;
var argument10 = false;
var argument11 = 1.430963878341383e+308;
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[213] = 6.685882284712524e+307
argument11[6.35085648319999e+307] = [25,-100,655,157,100,82,100,460]
return a*b/c/d
};
var base_0 = [213,82,595,595,-100,82]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [213,82,595,595,-100,82]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [213,82,595,595,-100,82]
var r_2= undefined
try {
r_2 = base_2.reduce(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [213,82,595,595,-100,82]
var r_3= undefined
try {
r_3 = base_3.reduce(argument9,argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test272.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)