





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0] = {"242":"=^","714":"X","!+$":"K'd","1.468034940823208e+307":"","":"TCj0G=`","1.5267746181775913e+308":"","8.610892195844212e+307":"J"}
return a-b/c
};
var argument2 = {"59":9.977468980441944e+307,"":""};
var argument3 = {"":"T","3.446900767455022e+307":7.244374868796811e+307,"vy":"&","1.0990729448442453e+308":"","ui":"","2.167449779662881e+307":1.77230282253867e+308,"cNX6B[Q82hU":3.796987420931665e+307,"x":"}80)Q|","}":""};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[403] = {"403":1.5911113257915319e+308,"1.7976931348623157e+308":"P"}
return a*b-c
};
var argument5 = null;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[8] = {"893":1.7865808734889036e+308,"1.694873637720651e+308":1.3182342555638121e+308,"":"","{S":""}
base_2[1][7] = [705,242,242]
argument6 = {"5":"","6":"","":82,"7.100907649900274e+307":969,"1.2340687867778804e+308":"Je"}
return a*b+c
};
var argument7 = {"242":82,"714":"","":"E","3.566257430880448e+306":893,"1.6744996585384994e+308":213};
var argument8 = [157,893,460,607,823,403,595,25];
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[3][2] = null
return a-b-c
};
var base_0 = [213,823,783,126,607,705,1.7976931348623157e+308]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.map(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.map(argument9)
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
require("fs").writeFileSync("./experiments/map/mapGen/test146.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)