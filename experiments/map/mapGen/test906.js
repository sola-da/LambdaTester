





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3['T'] = [213,-1,0,59]
return a+b-c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[5][1] = "&qs"
argument4[893] = null
base_1[3][2] = [1.7976931348623157e+308,100,0,823,59,1.7976931348623157e+308,843,59,843,-1]
return a*b+c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[1][3.5329845145600404e+307] = 1.0740475219305442e+308
base_2[3][2][5] = "tr"
return a*b-c
};
var argument4 = [100,157,893,618];
var argument5 = r_0;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[714] = false
base_3[5] = ["y","k","(Br=","gI"]
argument7[82] = ""
return a-b/c
};
var base_0 = [-100,893,893,122]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-100,893,893,122]
var r_1= undefined
try {
r_1 = base_1.map(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-100,893,893,122]
var r_2= undefined
try {
r_2 = base_2.map(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-100,893,893,122]
var r_3= undefined
try {
r_3 = base_3.map(argument6)
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
require("fs").writeFileSync("./experiments/map/mapGen/test906.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)