





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[4] = ["9","b",")(","SAHA#pfG","R","%","B","l"]
base_0[2] = 1.0386452111954663e+308
return a*b-c
};
var argument2 = true;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[403] = {}
argument5 = {"1SHF1":705,"T":7.572213017865286e+306,"1.1824110480296797e+308":5.852973857452717e+307}
base_1[9] = null
return a+b/c
};
var argument4 = {"403":"","460":7.92397107964922e+307,"7.226330244244626e+307":460,"":122,"#]":""};
var argument5 = {"1.3608823274823825e+308":"","a":"AK3","y}n":893,"":5.202950246692694e+307};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0] = [460,969,59,-1]
argument7[4] = null
return a+b+c
};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[2] = ""
base_3[5] = null
return a/b+c
};
var argument8 = null;
var base_0 = ["k","` ","|","N","s","E","aIK","4"]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["k","` ","|","N","s","E","aIK","4"]
var r_1= undefined
try {
r_1 = base_1.every(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["k","` ","|","N","s","E","aIK","4"]
var r_2= undefined
try {
r_2 = base_2.every(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["k","` ","|","N","s","E","aIK","4"]
var r_3= undefined
try {
r_3 = base_3.every(argument7,argument8)
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
require("fs").writeFileSync("./experiments/every/everyGen/test78.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)