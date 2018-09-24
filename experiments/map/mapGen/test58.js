





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[4] = 1.1188112898035011e+308
return a/b*c
};
var argument2 = null;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5 = {"242":"","705":"","":7.014152418378015e+307,"1.4649258127432996e+308":"","1.0993844901208948e+308":"","u":"n","L":"G","[ ^u":"Kb`9i"}
argument4[82] = null
argument4 = ""
return a+b-c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[3][2] = {"607":1.1901138489755842e+308,"823":"","dJ":"","4.592104718062252e+307":"","6.058925509131508e+307":6.900679286559904e+307,"1.80681095664218e+307":"","":"l'","6.487866655559311e+307":""}
base_2[1][4] = ["g?","Z","L","C","&"]
argument5[5] = ["-","q",0,893," "]
return a*b+c
};
var argument5 = null;
var argument6 = [157,"]:{k","z6"];
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[3] = false
base_3[9] = 1.0787368497328466e+308
base_3['length'] = ""
return a/b/c
};
var base_0 = [157,82,460,1.7976931348623157e+308,49,100]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [157,82,460,1.7976931348623157e+308,49,100]
var r_1= undefined
try {
r_1 = base_1.map(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [157,82,460,1.7976931348623157e+308,49,100]
var r_2= undefined
try {
r_2 = base_2.map(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [157,82,460,1.7976931348623157e+308,49,100]
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
require("fs").writeFileSync("./experiments/map/mapGen/test58.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)