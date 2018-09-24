





var callbackArguments = [];
var argument1 = null;
var argument2 = 1.922970797491022e+307;
var argument3 = true;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0['length'] = true
return a/b-c/d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[';N'] = 1.7359880366367182e+308
argument7[595] = true
argument6[627] = [627,618,1.7976931348623157e+308]
return a*b+c+d
};
var argument6 = r_1;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[1] = [",GVy","a4","g","I","z"]
argument7[9] = ""
return a+b-c/d
};
var argument8 = null;
var argument9 = null;
var argument10 = "1";
var argument11 = "k";
var argument12 = ["=","@LS","P","-","y","%Yy","f*","M{","r","OBBY"];
var argument13 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[25] = false
argument12['*c'] = {"59":595,"":"","{nn":"","1.1207829086460726e+308":823,"2.167086487142913e+306":1.7976931348623157e+308,"nO":213,"3.286160553564105e+307":0,"1.015263860355762e+308":""}
argument11[0] = false
return a*b/c*d
};
var base_0 = [595,893,0,-100,714,969,-1,213,403,59]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [595,893,0,-100,714,969,-1,213,403,59]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [595,893,0,-100,714,969,-1,213,403,59]
var r_2= undefined
try {
r_2 = base_2.reduce(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [595,893,0,-100,714,969,-1,213,403,59]
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test362.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)