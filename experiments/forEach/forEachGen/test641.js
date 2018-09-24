





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[3] = [242,783,"l",242]
argument2[-1] = 1.7976931348623157e+308
return a/b/c
};
var argument2 = false;
var argument3 = 3.6795463151759627e+307;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[3.462967293930506e+307] = false
base_1[1][1] = {}
argument5['D'] = null
return a/b/c
};
var argument5 = "";
var argument6 = [242,705,"U",893,126,823,122,"h;rh"];
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[8] = ""
argument8[8] = 1.1669724797005865e+308
argument8[3.0481490052276395e+306] = null
return a-b*c
};
var argument8 = false;
var argument9 = r_1;
var argument10 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[1] = {"25":1.3242583840953983e+308,"59":"<","122":"","1.0055631224980175e+308":1.1030311609674602e+308,"1.1947730225234558e+308":-100,"":"aLd"}
return a/b+c
};
var argument11 = false;
var base_0 = [655,969,213,-1,705,100]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [655,969,213,-1,705,100]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [655,969,213,-1,705,100]
var r_2= undefined
try {
r_2 = base_2.forEach(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [655,969,213,-1,705,100]
var r_3= undefined
try {
r_3 = base_3.forEach(argument10,argument11)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test641.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)