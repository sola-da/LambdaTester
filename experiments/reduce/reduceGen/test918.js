





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[1.359136872727139e+308] = null
base_0[6] = {"0":"Y","49":"t,`","82":1.3307481458717827e+308,"Wa":"z","":"$","+6;i":"","-1":1.5947908372438752e+308,"w":"0","e":122}
return a-b/c/d
};
var argument2 = null;
var argument3 = [969,157,655,59,122,618];
var argument4 = null;
var argument5 = "8";
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[5] = [";","9Hf%","z","c","1"]
return a-b+c-d
};
var argument7 = null;
var argument8 = "";
var argument9 = null;
var argument10 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[1.612812046173122e+308] = 4.2580393019590957e+307
return a/b*c/d
};
var argument11 = null;
var argument12 = false;
var argument13 = [";","o;","]","IU"];
var argument14 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3['length'] = 1.0174772158863346e+307
return a/b+c-d
};
var base_0 = ["j","Hj","y","|","`","=W","@","hUC-","3b"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["j","Hj","y","|","`","=W","@","hUC-","3b"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument3,argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["j","Hj","y","|","`","=W","@","hUC-","3b"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument7,argument8,argument9,argument10)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["j","Hj","y","|","`","=W","@","hUC-","3b"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument11,argument12,argument13,argument14)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test918.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)