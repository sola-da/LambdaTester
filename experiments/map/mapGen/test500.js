





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[3] = true
return a+b/c
};
var argument2 = true;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0] = ["I","4"]
base_1[3][2][5] = {"9":"","213":"n61(","_":595,"1.6127136192149104e+308":1.0534412691886433e+308,"1.7976931348623157e+308":-1}
argument4['f'] = ""
return a+b*c
};
var argument4 = null;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[6] = {"25":3.953453840631241e+307,"242":8.86556574184552e+307,"783":"","1.4752747962224758e+308":"","9.701436632129694e+306":9.535597330255997e+305}
argument7[2] = true
return a/b-c
};
var argument6 = r_0;
var argument7 = ["om","xe2","a;5","&","=",";[$"];
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9 = "5"
argument9[6] = null
base_3[0] = 1.5333245007713391e+308
return a-b+c
};
var argument9 = [627,705,49,823,618,100,783];
var base_0 = [823,126,893,0,607,1.7976931348623157e+308,-100,714,126]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [823,126,893,0,607,1.7976931348623157e+308,-100,714,126]
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [823,126,893,0,607,1.7976931348623157e+308,-100,714,126]
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
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
require("fs").writeFileSync("./experiments/map/mapGen/test500.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)