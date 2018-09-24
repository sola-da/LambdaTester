





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1][4] = true
argument2['sJRZP'] = {"":714,"1.7526148438051908e+308":"","9.800819222113495e+307":"","2.1667353281726508e+306":"O","7.44479039284902e+307":2.9214590065045456e+307}
base_0[0][2] = ["`","{C",403,969,"n1",893,"%",627,607]
return a/b/c
};
var argument2 = r_0;
var argument3 = r_0;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[3.3156198695370476e+307] = {"":705,"H0:":"","[-":607,"h":1.6833750687437893e+308,"5.940770849994226e+307":"","1.260001705406488e+308":6.224099510040146e+307,"wQq+b;(1R":"^K%^","7.344511317942094e+307":":0m","l":4.620451375284393e+307,"}":"r"}
return a-b+c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[3.3156198695370476e+307] = {"0":"","157":"","783":"","a8r[":100,"":8.985211469954258e+307,"e":1.3266549643863434e+308,"1.609748895695872e+307":",?kJ!","@":5e-324,"2.3294142448073667e+307":""}
base_2[4] = null
return a*b+c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[1.9097830510613482e+307] = 4.4095896090750124e+307
argument7[6] = true
base_3[2][7] = 4.75514365511108e+307
return a+b+c
};
var argument7 = null;
var base_0 = [-100,82]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-100,82]
var r_1= undefined
try {
r_1 = base_1.every(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-100,82]
var r_2= undefined
try {
r_2 = base_2.every(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-100,82]
var r_3= undefined
try {
r_3 = base_3.every(argument6,argument7)
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
require("fs").writeFileSync("./experiments/every/everyGen/test841.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)