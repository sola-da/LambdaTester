





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3['^h'] = null
return a*b+c
};
var argument2 = null;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4['_W'] = {"100":403,"1.3536370969934171e+308":"","<":"*Z","1.5332286028839482e+307":655,"6.699469459131905e+307":607,"P":607,"9.11615253452701e+307":"ga`","X":"","4.863260793406185e+307":2.292390739893109e+307}
argument3[1] = 5.023029209802593e+307
argument5[122] = 3.8398954796241846e+306
return a*b/c
};
var argument4 = false;
var argument5 = true;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[893] = null
base_2 = {}
base_2[5] = ""
return a*b-c
};
var argument7 = false;
var argument8 = null;
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[3][3] = {"242":1.4208076526013428e+308,"403":242,"618":"X9","627":-100,"v[$%":3.650309931575668e+307,"":"","Y":"I","1.5319083144957948e+308":-100,"6.129389492924566e+307":"GV"}
base_3['length'] = [82,-1,655]
argument10[2.249941463060761e+307] = 893
return a*b/c
};
var argument10 = r_3;
var argument11 = false;
var base_0 = ["R",1.7976931348623157e+308,460,-1,"|","y",403,242,242]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["R",1.7976931348623157e+308,460,-1,"|","y",403,242,242]
var r_1= undefined
try {
r_1 = base_1.some(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["R",1.7976931348623157e+308,460,-1,"|","y",403,242,242]
var r_2= undefined
try {
r_2 = base_2.some(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["R",1.7976931348623157e+308,460,-1,"|","y",403,242,242]
var r_3= undefined
try {
r_3 = base_3.some(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/some/someGen/test698.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)