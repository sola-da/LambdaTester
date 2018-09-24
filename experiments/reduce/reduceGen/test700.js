





var callbackArguments = [];
var argument1 = {"8.047132036929333e+307":";","I":"",":":705,"L":"T","-100":"AO=","<":607};
var argument2 = null;
var argument3 = false;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3['HMm'] = "l"
return a+b*c-d
};
var argument5 = false;
var argument6 = {"627":607,"1.4859897403475759e+308":"","":1.3982925729415298e+308};
var argument7 = null;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[7.463432409233234e+307] = [783]
base_1[3][1] = true
argument7[5] = {"157":"","607":"3<H%"}
return a/b-c-d
};
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0][0] = ""
argument11[595] = 5e-324
argument9[2.1280896016417002e+307] = false
return a/b*c*d
};
var argument10 = false;
var argument11 = null;
var argument12 = null;
var argument13 = null;
var argument14 = null;
var argument15 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument13[627][126] = {"714":"-","7.598993957119898e+307":"{yE8","N":"","Aq":""}
return a+b*c*d
};
var base_0 = ["T","rc","J","fdO","w|","ym","cc&b"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["T","rc","J","fdO","w|","ym","cc&b"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["T","rc","J","fdO","w|","ym","cc&b"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10,argument11)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["T","rc","J","fdO","w|","ym","cc&b"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument12,argument13,argument14,argument15)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test700.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)