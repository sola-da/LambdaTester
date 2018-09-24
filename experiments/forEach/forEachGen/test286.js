





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[6] = "a"
base_0[7] = false
argument2[3] = [-100,25,100,403,126,25,49,655,618,843]
return a-b-c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[2] = {"6.490564293107428e+306":627,"":82,"Ow[":157,"NT":""}
argument3[2] = ":Z"
base_1[0][823] = 1.3201052773087929e+308
return a+b*c
};
var argument3 = "";
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[4] = 1.2939386542531286e+308
base_2[0][1] = null
base_2[3][1.3434821406183095e+308] = {"v$":""}
return a-b+c
};
var argument5 = ["f_",-1,242,"O",655,100,-100];
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7['wIs'] = 1.7976931348623157e+308
argument6[2] = {"59":157,"":783}
base_3[4] = {"627":1.4121401248545185e+308,"2.8761033558992356e+307":100,"":"z"}
return a*b*c
};
var argument7 = false;
var argument8 = false;
var base_0 = ["KI","#]Y","ds$","pf","9*",">F"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["KI","#]Y","ds$","pf","9*",">F"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["KI","#]Y","ds$","pf","9*",">F"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["KI","#]Y","ds$","pf","9*",">F"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test286.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)