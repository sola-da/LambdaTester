





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[6] = [82,157,213,59,783]
argument3[59] = 1.7875170533809887e+308
argument2['D'] = {"1.2675754661051793e+308":"H"}
return a*b-c
};
var argument2 = "";
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[2][783] = null
argument6[1] = [705,242,122]
return a-b*c
};
var argument5 = null;
var argument6 = 8.397665962855692e+307;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8['wIs'] = {"595":"8S"}
return a+b*c
};
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[3][1.3434821406183095e+308] = 100
argument9[1.7394185942769049e+308] = {"714":",","":460,"IC":"s","9.85134361454881e+307":3.3798384878198374e+307}
argument9[5] = 1.381738856541341e+308
return a-b/c
};
var argument9 = r_0;
var argument10 = {"100":-1,"4.841228647455921e+305":2.5830672833320554e+307,"":"kt","1.28212889693892e+306":1.670883987165502e+308,"K":"TRTQ","_ynh":""};
var base_0 = [49,59,122]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [49,59,122]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [49,59,122]
var r_2= undefined
try {
r_2 = base_2.forEach(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [49,59,122]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test806.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)