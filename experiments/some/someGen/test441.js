





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument1 = {"1.3826602394166399e+308":2.0499508255634638e+307,"":100,"1.5631728434006418e+308":823,"1.0147812484443636e+307":1.4388680220768613e+308}
argument3[403] = "#"
return a/b/c
};
var argument2 = 1.5530686300475007e+308;
var argument3 = false;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1][8] = [783,1.7976931348623157e+308,157,460]
base_1['length'] = {"122":">u","627":"&%iUK[*","655":1.1644418337246368e+308,"-1":"ur","T":2.0903311703701102e+307,"9.270224369376433e+307":""}
argument5['f9zgt4n!ZJR]W'] = ["u","@)"]
return a*b/c
};
var argument5 = true;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[0] = true
return a/b-c
};
var argument7 = null;
var argument8 = r_2;
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3['length'] = [655,25,893,100,122]
return a/b/c
};
var base_0 = [714,893,59,122,-100,705,607,0]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [714,893,59,122,-100,705,607,0]
var r_1= undefined
try {
r_1 = base_1.some(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [714,893,59,122,-100,705,607,0]
var r_2= undefined
try {
r_2 = base_2.some(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [714,893,59,122,-100,705,607,0]
var r_3= undefined
try {
r_3 = base_3.some(argument9)
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
require("fs").writeFileSync("./experiments/some/someGen/test441.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)