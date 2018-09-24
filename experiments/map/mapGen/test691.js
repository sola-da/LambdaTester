





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[618] = [126,460,157,49,0,705]
argument2[3.208837311680636e+307] = null
base_0 = ["?a","+s",100,100,242]
return a/b*c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1] = ["S","@h","`z","J","u","6_#Y","#E","7"]
argument3[1]['d'] = {"157":823,"213":"t","460":1.4107081778750945e+308,"[":5e-324,"B":"","9.1389343283028e+307":1.0921586078282886e+308,"":25,"`":595,"1.7976931348623157e+308":"I"}
base_1[7][2] = false
return a*b/c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[157] = "K"
argument4[893] = true
return a-b-c
};
var argument4 = true;
var argument5 = 618;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0][1] = ""
argument7[1] = ""
base_3[0][1.4677087964888306e+308] = false
return a*b*c
};
var base_0 = ["7","-","S","M","x","n","Zz","K","?"]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["7","-","S","M","x","n","Zz","K","?"]
var r_1= undefined
try {
r_1 = base_1.map(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["7","-","S","M","x","n","Zz","K","?"]
var r_2= undefined
try {
r_2 = base_2.map(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.map(argument6)
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
require("fs").writeFileSync("./experiments/map/mapGen/test691.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)