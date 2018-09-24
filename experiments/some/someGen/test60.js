





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[9] = {"705":"t","1.361815129691909e+308":"K","1.7747626999089064e+308":1.70707129524392e+308,"9.046570795520687e+307":595,"":1.4273966709707833e+308,"y":893,"2.359725053420928e+307":5.143399791824858e+307}
base_0[1][2] = ["X64","4","&c"]
return a+b-c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[2] = "#"
argument4[1] = null
return a-b*c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[9] = 5.167346101223433e+307
argument4[4] = true
return a-b-c
};
var argument4 = -100;
var argument5 = null;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[8] = [714,595,705,618,705,100]
base_3[1][2] = [126,893,126,655]
base_3[8] = ""
return a/b*c
};
var base_0 = [")y",242,"US)RR",618,1.7976931348623157e+308,460]
var r_0= undefined
try {
r_0 = base_0.some(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [")y",242,"US)RR",618,1.7976931348623157e+308,460]
var r_1= undefined
try {
r_1 = base_1.some(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [")y",242,"US)RR",618,1.7976931348623157e+308,460]
var r_2= undefined
try {
r_2 = base_2.some(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [")y",242,"US)RR",618,1.7976931348623157e+308,460]
var r_3= undefined
try {
r_3 = base_3.some(argument6)
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
require("fs").writeFileSync("./experiments/some/someGen/test60.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)