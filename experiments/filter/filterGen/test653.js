





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[4][7] = [627,"O","q",705]
argument3[1.4034744228995816e+308] = ["Mdj","mh","a",213,-1,783,823]
base_0[0][0] = [-100,"k,",595,"X","V"]
return a+b*c
};
var argument2 = null;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[3.377960715099946e+307] = false
argument4[1.7121211182125595e+308] = {"0":-100,"969":"7","@x(>":"gNQs$4[aj","!ey":"","":1.7976931348623157e+308}
argument4[157] = 893
return a*b/c
};
var argument4 = 3.382628097578213e+307;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[7] = {"6.622352771460697e+307":7.115469100533858e+307}
argument7[5] = false
base_2[0][4] = "Q"
return a-b/c
};
var argument6 = 0;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[7] = [-1,126,0,823,607,-1]
base_3[2] = {"25":"d","242":1.7976931348623157e+308,"618":"82","714":460,"v5C_":4.906817100314599e+307,"1.61433418664023e+308":"%","H|":"","":9.769746454949298e+306,"{Y":"","-1":4.558454887552056e+307}
return a-b/c
};
var argument8 = null;
var base_0 = [-100,"%J","J","J)","^q(","]","si","A",607,"b"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-100,"%J","J","J)","^q(","]","si","A",607,"b"]
var r_1= undefined
try {
r_1 = base_1.filter(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.filter(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.filter(argument7,argument8)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test653.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)