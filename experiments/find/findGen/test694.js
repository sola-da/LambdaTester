





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[969] = [126,460,157,49,0,705]
base_0[1][1] = null
argument2 = ["?a","+s",100,100,242]
return a/b*c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3 = ["S","@h","`z","J","u","6_#Y","#E","7"]
base_1[0][1] = {"157":823,"213":"t","460":1.4107081778750945e+308,"[":5e-324,"B":"","9.1389343283028e+307":1.0921586078282886e+308,"":25,"`":595,"1.7976931348623157e+308":"I"}
base_1[8][0] = false
return a*b/c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[5] = "K"
argument3 = true
return a-b-c
};
var argument4 = true;
var argument5 = 618;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[0] = ""
argument8[969] = ""
base_3[1][0] = false
return a*b*c
};
var base_0 = ["7","-","S","M","x","n","Zz","K","?"]
var r_0= undefined
try {
r_0 = base_0.find(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["7","-","S","M","x","n","Zz","K","?"]
var r_1= undefined
try {
r_1 = base_1.find(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["7","-","S","M","x","n","Zz","K","?"]
var r_2= undefined
try {
r_2 = base_2.find(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["7","-","S","M","x","n","Zz","K","?"]
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
require("fs").writeFileSync("./experiments/find/findGen/test694.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)