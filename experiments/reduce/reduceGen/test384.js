





var callbackArguments = [];
var argument1 = {};
var argument2 = {"122":"5","242":655,"9.331954948603684e+307":242,"1.7281657270206868e+308":"","":"","Qd":"i"};
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[';N'] = false
argument3[59] = {"595":893,"1.9806285445814686e+307":"{"}
return a/b/c-d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[2] = null
return a+b-c/d
};
var argument6 = null;
var argument7 = 9.957570962258443e+307;
var argument8 = null;
var argument9 = false;
var argument10 = false;
var argument11 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[1.359136872727139e+308] = null
argument9[1] = 1.9157828291303314e+307
argument8[8] = "_&"
return a*b/c+d
};
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0][9.12287810829114e+307] = "4e"
argument13[2] = null
argument13[82] = {}
return a/b+c*d
};
var argument13 = 25;
var base_0 = [59,783,25,242,59,823,-100]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [59,783,25,242,59,823,-100]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7)
}
catch(e) {
r_1= "Error"
}
var base_2 = [59,783,25,242,59,823,-100]
var r_2= undefined
try {
r_2 = base_2.reduce(argument8,argument9,argument10,argument11)
}
catch(e) {
r_2= "Error"
}
var base_3 = [59,783,25,242,59,823,-100]
var r_3= undefined
try {
r_3 = base_3.reduce(argument12,argument13)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test384.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)