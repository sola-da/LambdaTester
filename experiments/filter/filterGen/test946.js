





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[6] = {}
base_0[8][3] = [",","T(NC*","vu","N","i","cE",",&8","2","X","Q"]
return a/b/c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1]['!cck7Mm']['g'] = {"9.59283185992692e+307":3.3321258186591897e+307,"4.624985893443115e+307":843,"1.6339385325054102e+308":1.1109235955700903e+308,"0{":"","":122,"1.152876219314558e+307":595}
base_1[6] = ""
return a+b-c
};
var argument3 = "!";
var argument4 = true;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7['#R[+'] = false
argument7[618] = true
return a/b-c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[1.7847438319683965e+308] = 122
argument7[1] = "|w"
argument7['c'] = [5e-324,126,403,49,25,618,893,82,1.7976931348623157e+308,82]
return a*b/c
};
var argument7 = null;
var argument8 = false;
var base_0 = ["z","!hr4","RQ","W","c59e","Y;","y","G"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["z","!hr4","RQ","W","c59e","Y;","y","G"]
var r_1= undefined
try {
r_1 = base_1.filter(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["z","!hr4","RQ","W","c59e","Y;","y","G"]
var r_2= undefined
try {
r_2 = base_2.filter(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["z","!hr4","RQ","W","c59e","Y;","y","G"]
var r_3= undefined
try {
r_3 = base_3.filter(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test946.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)