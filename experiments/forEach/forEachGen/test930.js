





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[7] = [403,157]
return a*b-c
};
var argument2 = null;
var argument3 = true;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0][595] = ["P","!Sx","h","l","{","159","^","*I#","G","YF"]
base_1['length'] = "9yj"
return a+b/c
};
var argument5 = true;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[2][783] = null
return a*b+c
};
var argument7 = "";
var argument8 = null;
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[3][0] = {"122":"N","126":"","893":"G;69)(","":"FU","1.4978684925856085e+308":1.9175934654802166e+307,")":"PY([d$","1.4921332470824259e+308":"T>xD(#"}
base_3[4][6] = ["V5","!","Q","E","xn","X","N","6LA",":?","cI8v"]
return a+b/c
};
var argument10 = {"893":"bB","":"","1.4679145475746063e+308":""};
var argument11 = null;
var base_0 = [82,157,157,-100,49,893,-100,5e-324,607,122]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [82,157,157,-100,49,893,-100,5e-324,607,122]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [82,157,157,-100,49,893,-100,5e-324,607,122]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [82,157,157,-100,49,893,-100,5e-324,607,122]
var r_3= undefined
try {
r_3 = base_3.forEach(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test930.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)