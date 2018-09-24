





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3['!j'] = ["%=,",25,"{o,lT","%fB","*"]
base_0[6][4] = ""
argument2['b'] = "Ot-o"
return a/b*c
};
var argument2 = true;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[3][1.7261030733891165e+308] = "I};"
base_1[3] = {}
argument4[0] = true
return a*b+c
};
var argument4 = r_1;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[3] = null
argument7['!j'] = 25
argument7['AO?'] = "i"
return a/b+c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[3][7] = 627
argument7['='] = [0,"v<","sN>","hI",705,607]
argument8[100] = false
return a*b*c
};
var argument7 = {"-1":157,"":8.947793797627118e+307,"1.7686576913615542e+308":"K3Y%}"};
var base_0 = [59,1.7976931348623157e+308,213,627,1.7976931348623157e+308,595]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [59,1.7976931348623157e+308,213,627,1.7976931348623157e+308,595]
var r_1= undefined
try {
r_1 = base_1.find(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [59,1.7976931348623157e+308,213,627,1.7976931348623157e+308,595]
var r_2= undefined
try {
r_2 = base_2.find(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [59,1.7976931348623157e+308,213,627,1.7976931348623157e+308,595]
var r_3= undefined
try {
r_3 = base_3.find(argument6,argument7)
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
require("fs").writeFileSync("./experiments/find/findGen/test799.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)