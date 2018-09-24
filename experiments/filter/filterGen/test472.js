





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[9] = [823,122,100,607]
base_0[0] = [893,157,460]
argument3['T'] = null
return a+b/c
};
var argument2 = "=";
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[7] = null
argument4[157] = null
argument4[3.0481490052276395e+306] = {"242":"[","1.55883711065069e+307":"q3?nsd","":""}
return a*b-c
};
var argument4 = "";
var argument5 = "4";
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[3.377960715099946e+307] = {"":"N","1.4932972690928823e+308":"","5.133696977365377e+307":2.62056194668545e+307}
base_2[6] = true
argument7[0] = ["*r=","s","OzGU","W","YS",">","l","e","}"]
return a*b+c
};
var argument7 = r_1;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[7] = {"":"s","1.3598123773971258e+307":49,"1.2930047447878162e+308":""}
argument9['wIs'] = null
return a-b+c
};
var base_0 = [823,893,213]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [823,893,213]
var r_1= undefined
try {
r_1 = base_1.filter(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.filter(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.filter(argument8)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test472.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)