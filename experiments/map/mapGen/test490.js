





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1][4] = null
argument2[3] = {"":"X","qr":"H-W","P":460}
argument3[607] = 3.486661852434448e+307
return a+b*c
};
var argument2 = true;
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[2] = "]BO"
return a*b+c
};
var argument5 = {"783":7.278273537316465e+307,"wFFdoqKv":1.7924977915510413e+308,"1.5801738521493218e+308":""};
var argument6 = true;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[3][3] = [843,403,"^1Z",607,"n","_",242,"dI",242]
argument8[9.869573703797622e+307] = null
return a-b-c
};
var argument8 = [893,969,627,714,100,823,1.7976931348623157e+308,59];
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[3.208837311680636e+307] = {"823":"L","":"][","3.562146923959553e+307":"","1.6204649761450865e+308":100,"1.6358679762867673e+307":213,"1.7719145372722744e+308":2.953783028015147e+306}
return a-b/c
};
var argument10 = null;
var argument11 = "Iw=]";
var base_0 = [0,655,655,655,893,0,0,59,460,126]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [0,655,655,655,893,0,0,59,460,126]
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [0,655,655,655,893,0,0,59,460,126]
var r_2= undefined
try {
r_2 = base_2.map(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.map(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/map/mapGen/test490.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)