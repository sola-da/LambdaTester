





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[607] = {"607":"v","783":"","1.3925965250534969e+308":6.527882526183834e+307,"":"mxb","1.3464426214055294e+308":"I3","1.624673684002516e+308":1.7976931348623157e+308,"1.178709218409804e+308":"x]","1.1499815384331825e+308":1.757489501781841e+308}
return a*b*c
};
var argument2 = {"893":"","-1":1.3046940270128506e+308,"":8.570437142171666e+307};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0][0] = [242,460,82,-1,0,-100,25,-1,893]
base_1[6] = 8.367050263570538e+307
return a+b/c
};
var argument4 = r_1;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[5][2] = null
return a*b-c
};
var argument6 = true;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[0] = false
base_3[3][2][6] = null
argument8['f'] = "$"
return a+b+c
};
var argument8 = r_1;
var argument9 = false;
var base_0 = [157,607,49,893,655,122,893,213,823]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [157,607,49,893,655,122,893,213,823]
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
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
require("fs").writeFileSync("./experiments/map/mapGen/test716.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)