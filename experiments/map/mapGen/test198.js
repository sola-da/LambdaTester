





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[5] = 3.974279465004283e+305
return a-b/c
};
var argument2 = 893;
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[893] = 403
return a-b+c
};
var argument5 = true;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[5] = {"25":655,"U":4.2647208516352077e+307,";gpA":7.31504213596933e+307,"e":1.5264462277837654e+308,"":"","-1":-100,"&":"","^F":3.575309215254387e+307,"1.6472513269129763e+307":"#x"}
return a/b+c
};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[403] = [1.7976931348623157e+308,"0A:",618,213,"q","VjN","g","J",969,"G"]
base_3[7][2] = 2.1698533662875962e+307
return a/b+c
};
var argument8 = [823,969,242,157,1.7976931348623157e+308,122,0];
var base_0 = [607,627,25,49,403,157,157,460,5e-324]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [607,627,25,49,403,157,157,460,5e-324]
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [607,627,25,49,403,157,157,460,5e-324]
var r_2= undefined
try {
r_2 = base_2.map(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
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
require("fs").writeFileSync("./experiments/map/mapGen/test198.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)