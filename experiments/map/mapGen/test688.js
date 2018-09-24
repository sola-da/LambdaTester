





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[1.6177106033227046e+308] = [655,126,460,893,618,213,100]
argument3[714] = 1.5147071336087048e+308
base_0[1][4] = {"4":242,"242":627,"705":"","893":"","hp":1.1988505958519488e+308,"*":6.94853821693482e+306,"1.3482168113861135e+308":"H","1.4260287255114582e+308":"","w;&!;h[":-1}
return a+b+c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[157] = [595,"{","Ca",618,627,"!v",607,618]
argument4[5] = "}"
return a*b*c
};
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[1.0546776681946723e+308] = {}
base_2[7] = null
return a+b/c
};
var argument5 = null;
var argument6 = {"":"","Q":2.1123552058679802e+307,"8.574042069344604e+307":7.295717124216175e+307};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[403] = null
return a+b+c
};
var argument8 = "2";
var base_0 = ["N","N","9","0","K","?","EH",";]","k_","#DBx"]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["N","N","9","0","K","?","EH",";]","k_","#DBx"]
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["N","N","9","0","K","?","EH",";]","k_","#DBx"]
var r_2= undefined
try {
r_2 = base_2.map(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
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
require("fs").writeFileSync("./experiments/map/mapGen/test688.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)