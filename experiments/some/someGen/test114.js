





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[4] = "f"
base_0[1][8] = 1.1635675596818193e+308
argument2[9] = null
return a+b+c
};
var argument2 = {"25":1.7155156991026515e+307,"y=":1.7976931348623157e+308};
var argument3 = 100;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[6] = null
base_1[5] = {"59":"GC","705":655,"823":1.2815697667636599e+308,"-1":157,"":126,"]q1'":"","1.7761587611120402e+308":5.714999868427859e+306,"&":627,"V":"%","A&8":")"}
base_1[5][0] = null
return a/b/c
};
var argument5 = {"":"%W2"};
var argument6 = null;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9 = null
argument8[618] = [59,122,714,213,"x",714,"3N}:e",705,"<G"]
base_2[4] = ",vl"
return a-b*c
};
var argument8 = null;
var argument9 = null;
var argument10 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[1][8] = ["Tl","7","B","-a","JWM","= N","sE","?LS{J","9"]
argument11[1] = false
return a*b-c
};
var argument11 = r_1;
var argument12 = null;
var base_0 = ["l","LU?U",595,49,"`",969,"Xj","(","wH"]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["l","LU?U",595,49,"`",969,"Xj","(","wH"]
var r_1= undefined
try {
r_1 = base_1.some(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["l","LU?U",595,49,"`",969,"Xj","(","wH"]
var r_2= undefined
try {
r_2 = base_2.some(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["l","LU?U",595,49,"`",969,"Xj","(","wH"]
var r_3= undefined
try {
r_3 = base_3.some(argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/some/someGen/test114.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)