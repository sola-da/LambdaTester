





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[6] = true
argument3[1.7847438319683965e+308] = ["gy)","V","s"]
argument3[5] = [82,843,969,-1,627,595,655,403]
return a/b+c
};
var argument2 = null;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[4] = 1.3767777113303034e+308
argument4[714] = {"25":4.698002071580197e+307,"714":1.1726754330783223e+308,"w":1.1153211119369838e+308,"%w":"X!","R":100}
return a+b*c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[4.224481734419934e+307] = "@w"
return a+b/c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[2] = 7.499357811110601e+307
base_3[1][2] = true
argument6[1.7847438319683965e+308] = {"126":8.03964311198917e+306,"157":"","893":"","-100":"2K;=a39pH","":"","4.356116927687329e+307":"zD","j":1.0256175474423355e+308,"1.721826825308578e+308":"","1.2135114936300957e+308":"sk"}
return a/b-c
};
var argument6 = false;
var argument7 = "5";
var base_0 = ["^{^$","&","T","a","a","gP","["]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["^{^$","&","T","a","a","gP","["]
var r_1= undefined
try {
r_1 = base_1.filter(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["^{^$","&","T","a","a","gP","["]
var r_2= undefined
try {
r_2 = base_2.filter(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["^{^$","&","T","a","a","gP","["]
var r_3= undefined
try {
r_3 = base_3.filter(argument5,argument6,argument7)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test370.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)