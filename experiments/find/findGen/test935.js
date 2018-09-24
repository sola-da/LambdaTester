





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[242] = {"59":4.2025645035627986e+307,"460":"2!","4.544644622364798e+307":"","L*":9.861261200835194e+307,"1.5813542597527262e+308":8.396538564827029e+307,"m":595,"u":"","":""}
argument3['AA@'] = null
return a+b/c
};
var argument2 = true;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4['b'] = ""
argument3[3.377960715099946e+307] = [49,705,1.7976931348623157e+308,213]
base_1[3] = ""
return a+b+c
};
var argument4 = "cF>";
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[8] = ["e"]
return a*b+c
};
var argument6 = true;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[8] = "5"
base_3[1] = ["|","YK","4","(t6","|","::","Nt_6","@","b"]
return a/b-c
};
var argument8 = null;
var argument9 = [157,618,-100,714,403];
var base_0 = [49,"B",242,100,0,403,"r"]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [49,"B",242,100,0,403,"r"]
var r_1= undefined
try {
r_1 = base_1.find(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [49,"B",242,100,0,403,"r"]
var r_2= undefined
try {
r_2 = base_2.find(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [49,"B",242,100,0,403,"r"]
var r_3= undefined
try {
r_3 = base_3.find(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/find/findGen/test935.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)