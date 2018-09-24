





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[2] = false
return a*b/c
};
var argument2 = false;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[2][7] = [25,1.7976931348623157e+308,-100,403,-1,59,607,823,714]
argument5 = true
argument4['sJRZP'] = 1.5880884683842116e+308
return a-b*c
};
var argument4 = ["5"];
var argument5 = "?!";
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[3] = {"82":"(","":"","1.7976931348623157e+308":1.5123437245372272e+308,"9.003639125424667e+307":"","p":82,"G":"","7.110925188542419e+306":"","m1":"'"}
argument7[2] = {"460":655,"618":1.3941262271352285e+308,"":823,"1.1045337170220023e+308":627,"5.602305854037741e+307":242,"X`":"Y"}
base_2[0][1] = null
return a/b+c
};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0][2] = true
return a-b*c
};
var base_0 = [213,618,627,705,157,893,-1]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [213,618,627,705,157,893,-1]
var r_1= undefined
try {
r_1 = base_1.every(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [213,618,627,705,157,893,-1]
var r_2= undefined
try {
r_2 = base_2.every(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [213,618,627,705,157,893,-1]
var r_3= undefined
try {
r_3 = base_3.every(argument7)
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
require("fs").writeFileSync("./experiments/every/everyGen/test408.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)