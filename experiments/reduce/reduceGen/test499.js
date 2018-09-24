





var callbackArguments = [];
var argument1 = 1.6790234840335584e+308;
var argument2 = null;
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[8] = {"p":1.2349594619879644e+308,"1.6212314801545558e+308":"","":7.431433887703337e+307}
argument2[25] = [122,59,618,1.7976931348623157e+308,82]
argument1[1] = 1.467703747088698e+308
return a*b*c*d
};
var argument5 = null;
var argument6 = [403,893,122,-1];
var argument7 = "<";
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[627] = ""
argument7[3] = null
return a/b-c/d
};
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2 = 122
argument9['s'] = {"?":"Nb:6=","":",2"}
argument11[25] = "5"
return a+b-c+d
};
var argument10 = null;
var argument11 = 7.429115151335427e+307;
var argument12 = true;
var argument13 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[2] = ["?R","0","j","##[","6","m"]
base_3[0][3] = ["bfc","TU","ga1{","X","fdw6"]
return a*b/c-d
};
var base_0 = [157,"$G",595,122]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [157,"$G",595,122]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = [157,"$G",595,122]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [157,"$G",595,122]
var r_3= undefined
try {
r_3 = base_3.reduce(argument10,argument11,argument12,argument13)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test499.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)