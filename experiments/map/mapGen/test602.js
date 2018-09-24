





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0][1.4677087964888306e+308] = {"82":"d","893":1.4371470609846722e+308,"":1.058559812764694e+308,"E":3.068333379994384e+307,"M":0,"1.58134800974498e+308":"","-1":"","J":"","9.322394236025768e+307":""}
base_0[3][2][5] = 460
argument3[0] = {"126":"<","":1.9795052395342444e+307,"]":"","1.7976931348623157e+308":7.1795524042215e+307,"1.2823375672668555e+308":""}
return a/b+c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[1.1881593224845412e+308] = null
base_1[6][3] = null
argument3[3.208837311680636e+307] = {"7":"H","":"D","2.3197015928780473e+307":"="}
return a+b+c
};
var argument3 = false;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[82] = ["(&","TF"]
base_2[9] = {"Y":"5"}
base_2[3][1] = {"49":1.4051218851375489e+308,"460":100,"607":"y`y","893":" Wl","":"t","1.4335758464329492e+308":7.670295733763802e+307,"1.0420805884002841e+308":"","C":"","a":"N","u!":""}
return a/b+c
};
var argument5 = "(i)9(";
var argument6 = [-1,100,843,893,783,82];
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3 = null
base_3[7][2] = [607,969,595,5e-324]
return a+b/c
};
var argument8 = null;
var base_0 = [0,969,"K",82,"n",595]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [0,969,"K",82,"n",595]
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [0,969,"K",82,"n",595]
var r_2= undefined
try {
r_2 = base_2.map(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.map(argument7,argument8)
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
require("fs").writeFileSync("./experiments/map/mapGen/test602.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)