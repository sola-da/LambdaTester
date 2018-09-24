





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1][4] = true
base_0[1] = [242,655,893,59,843]
return a/b/c
};
var argument2 = r_0;
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[0] = {"607":" F","714":0,"1.7976931348623157e+308":49,"1.231978295606351e+308":-1,"1.2148333882632152e+308":1.2756361078288924e+308,"%":"","":403}
argument5[3] = ["{","aU"]
argument6[0] = null
return a/b+c
};
var argument5 = r_0;
var argument6 = true;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[2] = {"A":"","*":"tc"}
argument8[1]['d'] = ""
return a-b-c
};
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0][1.4677087964888306e+308] = {"460":"%","":1.6977214650074408e+308,"1.1906829607605013e+308":6.618851702148747e+307}
base_3 = 157
base_3[9] = false
return a+b-c
};
var argument9 = 2.8433737474780466e+306;
var argument10 = r_1;
var base_0 = [705,100,242,-1,627,595,705,126,783]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [705,100,242,-1,627,595,705,126,783]
var r_2= undefined
try {
r_2 = base_2.map(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.map(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/map/mapGen/test220.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)