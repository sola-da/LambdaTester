





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[5][1] = {"25":"","1.198889458886976e+308":714,"L":"P","":126}
argument3[0] = ""
return a-b-c
};
var argument2 = null;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4['a8r['] = {"157":3.7303257238700184e+307}
base_1 = ["hl(pd","|","+","l"]
return a-b-c
};
var argument4 = "O";
var argument5 = null;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[1][4] = "&W^Y"
argument7[783] = false
return a*b+c
};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[783] = [100,-1,969,242]
return a+b-c
};
var argument8 = r_1;
var base_0 = [-1,705,595,100,0,893,59]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-1,705,595,100,0,893,59]
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-1,705,595,100,0,893,59]
var r_2= undefined
try {
r_2 = base_2.map(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-1,705,595,100,0,893,59]
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
require("fs").writeFileSync("./experiments/map/mapGen/test841.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)