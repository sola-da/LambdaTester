





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2['D'] = ""
argument3[3.462967293930506e+307] = [893,-1,627,627,1.7976931348623157e+308,49,100,595,-1]
return a-b-c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[1] = ["Wi","@fw","(","r","6","+"]
base_1[2][8.05235215815219e+307] = {"49":"","460":"","823":655,"893":595,"o":893,"":1.3919580675742456e+308,"4lP":1.7976931348623157e+308,"B@":"w"}
return a*b*c
};
var argument3 = true;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[8] = false
argument4[7.92397107964922e+307] = 1.3042356560853388e+308
argument5['ns'] = [25,607,705,893,403,714,460,705,157]
return a+b/c
};
var argument5 = {"618":1.576830784201794e+308,"705":893,"{'":"0!|","1.0109929764609218e+308":"9]","1.11351355943928e+308":"","5>b":"","":""," p":3.9470894768704634e+307,"5.547513457786302e+307":1.0913349728605657e+308};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[4] = {}
argument8[5] = null
argument8[5] = null
return a+b-c
};
var base_0 = ["pW","?","G","a","#P8+","z(?wUOc","](","hGK]6","9","ei"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["pW","?","G","a","#P8+","z(?wUOc","](","hGK]6","9","ei"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["pW","?","G","a","#P8+","z(?wUOc","](","hGK]6","9","ei"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["pW","?","G","a","#P8+","z(?wUOc","](","hGK]6","9","ei"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test687.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)