





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0][0] = false
argument2[1] = null
base_0[2][1] = ""
return a-b/c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[6] = "$uY"
base_1[9] = false
return a*b*c
};
var argument3 = -100;
var argument4 = ["K?w","i","3","B","&zx"];
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[1.7847438319683965e+308] = "u"
return a-b/c
};
var argument6 = r_0;
var argument7 = null;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[4] = 1.4008349858610762e+308
argument10[1.7847438319683965e+308] = ":b"
base_3[2][1] = 783
return a/b/c
};
var argument9 = true;
var argument10 = 595;
var base_0 = ["qt*",59,"E3"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["qt*",59,"E3"]
var r_1= undefined
try {
r_1 = base_1.filter(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.filter(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["qt*",59,"E3"]
var r_3= undefined
try {
r_3 = base_3.filter(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test775.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)