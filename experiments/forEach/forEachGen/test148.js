





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[4] = true
argument2[2][783] = false
argument2[5] = true
return a/b/c
};
var argument2 = false;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[1.4034744228995816e+308] = {"0":"","242":"<","460":655,"627":"QB","705":0,"":"","W":49}
base_1['length'] = false
base_1[6] = null
return a/b*c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[2] = 823
base_2[8] = false
base_2[1] = {"126":"lJa","843":1.280699256864876e+308,"-1":1.7976931348623157e+308,"":"X","3.1168163084760965e+307":705,"#":"<u#-","4XFMB":"","`":1.0034053626492548e+307}
return a*b+c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[6] = true
argument7[1] = 1.4017303159420023e+308
return a+b-c
};
var argument6 = 213;
var base_0 = ["M","I{sW","$","{k","Y"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["M","I{sW","$","{k","Y"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["M","I{sW","$","{k","Y"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["M","I{sW","$","{k","Y"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument5,argument6)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test148.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)