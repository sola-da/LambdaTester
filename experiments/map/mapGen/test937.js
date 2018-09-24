





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[1] = [607,"1",714,595,"5_"]
argument1 = false
argument3[893] = [-1,"n",25]
return a-b-c
};
var argument2 = true;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
return a-b*c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[7] = {"31":7.895194340595512e+307,"627":1.6855646131104855e+308,"1.273065467518023e+308":"D","N":823,"1.729139208544699e+307":"","":"K]"}
base_2[0][1.4677087964888306e+308] = {"":1.5750404250813086e+308,"1.582799487504701e+307":"","N":893}
argument5[3] = false
return a*b/c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7['V'] = ["g",969]
base_3[3][618] = false
base_3[6]['VsR'] = [122,714,126,"fR",969,-1,783]
return a*b*c
};
var argument6 = 969;
var base_0 = ["G","xe","u","q,","W","qy","a"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["G","xe","u","q,","W","qy","a"]
var r_1= undefined
try {
r_1 = base_1.map(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["G","xe","u","q,","W","qy","a"]
var r_2= undefined
try {
r_2 = base_2.map(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.map(argument5,argument6)
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
require("fs").writeFileSync("./experiments/map/mapGen/test937.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)