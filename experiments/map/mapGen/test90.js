





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[8] = {"":""}
base_0[9] = null
base_0['length'] = null
return a*b*c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3['A'] = ""
return a*b*c
};
var argument3 = false;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[3][2] = false
base_2[3] = 49
return a*b+c
};
var argument5 = null;
var argument6 = {"1.689423197822041e+308":1.062182293384743e+308,"6n":5.681407587487721e+307};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[1] = {"25":25,"VMua":6.945229365479807e+307,"":"","L":"","+":""}
return a/b*c
};
var base_0 = ["w","I",460,705,"(QM","eB",213,157,460,714]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.map(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.map(argument7)
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
require("fs").writeFileSync("./experiments/map/mapGen/test90.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)