





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[3] = [122,25,49,0,714]
argument3[3] = " P"
argument2[1.399309004356655e+308] = null
return a-b*c
};
var argument2 = 595;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[6] = [82]
argument4[607] = null
argument5[893] = {"618":82,"2.006044368909887e+306":3.570753637458403e+307,"1.7385043561671046e+308":"","":">","b":"","1.6432652571034255e+308":1.7142051397504965e+307,"R":"d^","6.92041497721512e+307":"M","1.2306189149315376e+308":""}
return a/b-c
};
var argument4 = true;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[607] = {"157":"","460":213,"714":5.784867248736974e+307,"":460,"1.6551278365826111e+308":"iK","hVp":6.668978371362117e+307,"U":5.877097780194318e+307}
argument7['AA@'] = {"A":126}
argument6[3][6] = false
return a/b+c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[25] = ""
argument8['W'] = [823,82]
argument7[-1] = [-100,655,969,595]
return a*b/c
};
var base_0 = [157,100]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [157,100]
var r_1= undefined
try {
r_1 = base_1.find(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [157,100]
var r_2= undefined
try {
r_2 = base_2.find(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [157,100]
var r_3= undefined
try {
r_3 = base_3.find(argument6)
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
require("fs").writeFileSync("./experiments/find/findGen/test981.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)