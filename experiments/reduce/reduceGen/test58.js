





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1] = [618,-1,893,823,1.7976931348623157e+308,607]
base_0[0] = 1.4023121779527174e+308
return a+b-c/d
};
var argument2 = null;
var argument3 = -1;
var argument4 = null;
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[4] = null
argument3[4] = 4.379547235204575e+307
return a/b*c*d
};
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[4] = null
argument6[1] = 157
return a/b+c+d
};
var argument7 = r_2;
var argument8 = r_0;
var argument9 = "";
var argument10 = {"{":-1,"":0,"3.747854909535527e+306":"Ije","1.7305262087992825e+308":""};
var argument11 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0][9.12287810829114e+307] = {"":"U#","$_":5.559614676056458e+307}
argument9[2] = "|]"
base_3[5] = ""
return a*b+c+d
};
var base_0 = ["`<5;",1.7976931348623157e+308,823,"J",126,"k","LU"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["`<5;",1.7976931348623157e+308,823,"J",126,"k","LU"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument2,argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["`<5;",1.7976931348623157e+308,823,"J",126,"k","LU"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["`<5;",1.7976931348623157e+308,823,"J",126,"k","LU"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument8,argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test58.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)