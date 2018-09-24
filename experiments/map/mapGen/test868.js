





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[82] = {"157":6.813784185741731e+307,"618":"","Z":"","DS>":1.3884302730272398e+308,"w":"","1.1782868793289178e+308":242,"`":"4fk","1.2732227042524885e+308":"hXT"," ":""}
base_0[0][1.4677087964888306e+308] = true
return a+b+c
};
var argument2 = [100,-100,460,-1,403,213,213,893];
var argument3 = true;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[2][6.452074605254766e+307] = null
return a*b-c
};
var argument5 = "XHT?|,n";
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0] = [59,-1,242,893,783,1.7976931348623157e+308,5e-324]
argument8[157] = null
argument7[5] = [627,1.7976931348623157e+308,705,893,0,126,126,595,213,403]
return a/b*c
};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[783] = null
base_3[4] = null
argument8[6] = null
return a-b*c
};
var argument8 = null;
var argument9 = [823,242,893,893];
var base_0 = [607,242]
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
r_1 = base_1.map(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.map(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.map(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/map/mapGen/test868.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)