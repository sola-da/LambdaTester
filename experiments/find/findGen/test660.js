





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3['^h'] = {"49":"","1.4407729656935424e+308":"","":1.3908372723276407e+308,"1.1590483757819826e+308":"Z"}
argument1[5] = true
base_0[3] = ""
return a-b*c
};
var argument2 = null;
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[3] = [49,969,705,783,49,893,-1,-100,1.7976931348623157e+308]
return a+b/c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7['AO?'] = [607,"DV",595,1.7976931348623157e+308,126,"k",59,"2",157]
argument6[627] = ["+v","Xlg","1","r","e","R"]
argument7[1] = null
return a-b*c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[0] = {"213":4.4254477677361324e+307,"":1.7976931348623157e+308,"1.5389882779598108e+308":""}
return a-b+c
};
var argument7 = null;
var base_0 = [843,59,25,823,0]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [843,59,25,823,0]
var r_1= undefined
try {
r_1 = base_1.find(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [843,59,25,823,0]
var r_2= undefined
try {
r_2 = base_2.find(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.find(argument6,argument7)
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
require("fs").writeFileSync("./experiments/find/findGen/test660.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)