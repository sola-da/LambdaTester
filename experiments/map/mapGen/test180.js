





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
return a*b*c
};
var argument2 = true;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[893] = ""
return a-b+c
};
var argument4 = true;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[618] = "{"
argument7[607] = false
base_2[0][1.4677087964888306e+308] = null
return a*b*c
};
var argument6 = ["n","sk"];
var argument7 = {"82":9.54191680661319e+307,"595":"{","823":5.643757891647357e+307,"s":"","1.4894335659891693e+308":5e-324,"1.0597151119087302e+308":1.1520452862680246e+308};
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[9] = ["I1","T","{q","z&?","$","[","2`mUA","j","Y$","f2"]
base_3[4] = -1
return a-b-c
};
var argument9 = {"49":242,"607":"i","1.2993397333621745e+308":242,"1.058468692224087e+308":"aAe","":1.215822388353903e+308,"4.619125128248685e+307":"","1.7976931348623157e+308":"","9.869573703797622e+307":0,"1.3082202800330956e+308":"%","c!aW'n[N":""};
var base_0 = [-1,122,0,242,82,242,157]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-1,122,0,242,82,242,157]
var r_3= undefined
try {
r_3 = base_3.map(argument8,argument9)
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
require("fs").writeFileSync("./experiments/map/mapGen/test180.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)