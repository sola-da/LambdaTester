





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[4] = 843
return a+b+c
};
var argument2 = true;
var argument3 = true;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[126] = true
argument6[403] = null
argument5[705] = [403,59]
return a/b+c
};
var argument5 = [460,"4",595,25,126];
var argument6 = null;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[0] = 823
argument8 = true
argument8[705] = "p"
return a*b+c
};
var argument8 = r_0;
var argument9 = [0,607];
var argument10 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[6] = null
argument12[0] = {"2.4436797213372336e+307":"m1V","":"","a":783}
argument10[3.377960715099946e+307] = false
return a+b-c
};
var base_0 = ["[=","x"]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["[=","x"]
var r_1= undefined
try {
r_1 = base_1.find(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["[=","x"]
var r_2= undefined
try {
r_2 = base_2.find(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["[=","x"]
var r_3= undefined
try {
r_3 = base_3.find(argument10)
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
require("fs").writeFileSync("./experiments/find/findGen/test517.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)