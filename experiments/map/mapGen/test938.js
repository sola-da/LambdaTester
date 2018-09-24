





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[0] = {"823":"D","udTu'a":1.4280253729970597e+308,"1O":9.25607009638637e+307,"1.2907172020117275e+308":8.201920602253908e+307,"%":655,"":"","Z":"","1.0942240263791468e+308":""}
return a+b*c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[5] = [122,5e-324,783,126,157,122,627,-1,122,1.7976931348623157e+308]
base_1[6] = {"6.291201322539638e+307":":"}
argument3[403] = 1.2889753753466326e+308
return a/b/c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[5] = null
argument5[1] = 1.1514531188131278e+308
return a-b*c
};
var argument4 = false;
var argument5 = {"213":"%","5.595825087391645e+307":">"};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[1.6177106033227046e+308] = {"122":"4R","1.5941159740688404e+308":""}
base_3[0][1.4677087964888306e+308] = "-"
base_3[1][7] = "n"
return a-b*c
};
var argument7 = 618;
var base_0 = [49]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [49]
var r_1= undefined
try {
r_1 = base_1.map(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [49]
var r_2= undefined
try {
r_2 = base_2.map(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.map(argument6,argument7)
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
require("fs").writeFileSync("./experiments/map/mapGen/test938.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)