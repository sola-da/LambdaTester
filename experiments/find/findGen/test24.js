





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1][2] = null
argument2[1] = false
return a*b*c
};
var argument2 = true;
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[8] = null
return a/b/c
};
var argument5 = 7.219538844228275e+307;
var argument6 = [">W","k(","B",213];
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[1] = {}
base_2[1][7] = "D"
return a*b-c
};
var argument8 = true;
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[1][7] = false
return a+b+c
};
var argument10 = "PP";
var argument11 = true;
var base_0 = [714,"V)","v","L"]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [714,"V)","v","L"]
var r_1= undefined
try {
r_1 = base_1.find(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [714,"V)","v","L"]
var r_2= undefined
try {
r_2 = base_2.find(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [714,"V)","v","L"]
var r_3= undefined
try {
r_3 = base_3.find(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/find/findGen/test24.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)