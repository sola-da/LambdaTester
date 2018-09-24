





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[5] = [-1,843,157,126,1.7976931348623157e+308,595,783,403,59]
base_0['length'] = "8^"
return a-b*c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[627] = "E:"
return a+b/c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0] = null
base_2[2] = ["3","b"]
return a+b-c
};
var argument4 = true;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7['AO?'] = {"595":"Rr","969":"}9","":242,"A":5.751461546174513e+306}
base_3['length'] = null
base_3[4] = {"122":"","":5.577490814676164e+307,"(":"","3.4638506627152225e+307":"k","6.21022672035132e+307":"zO","3.3156198695370476e+307":618,"1.548827057841199e+308":""}
return a+b+c
};
var argument6 = {"100":"@","1.2559734900288215e+308":82,"":"fDi","9r":""};
var base_0 = ["b7e","t|","F_<","Ea","YR","7"]
var r_0= undefined
try {
r_0 = base_0.find(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["b7e","t|","F_<","Ea","YR","7"]
var r_1= undefined
try {
r_1 = base_1.find(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["b7e","t|","F_<","Ea","YR","7"]
var r_2= undefined
try {
r_2 = base_2.find(argument3,argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["b7e","t|","F_<","Ea","YR","7"]
var r_3= undefined
try {
r_3 = base_3.find(argument5,argument6)
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
require("fs").writeFileSync("./experiments/find/findGen/test11.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)