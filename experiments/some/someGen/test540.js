





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[4] = ""
base_0[2][5e-324] = ""
argument1[4] = null
return a-b+c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[2.249941463060761e+307] = true
return a-b-c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[6] = [1.7976931348623157e+308]
return a*b+c
};
var argument4 = true;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6['j'] = [126,"VRw",460,"oM+"," ZH"]
base_3[1][0] = null
argument6[3][3] = 6.766752900341507e+307
return a*b*c
};
var base_0 = [705,595,1.7976931348623157e+308,705,1.7976931348623157e+308,618,-1,213,655]
var r_0= undefined
try {
r_0 = base_0.some(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [705,595,1.7976931348623157e+308,705,1.7976931348623157e+308,618,-1,213,655]
var r_1= undefined
try {
r_1 = base_1.some(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [705,595,1.7976931348623157e+308,705,1.7976931348623157e+308,618,-1,213,655]
var r_2= undefined
try {
r_2 = base_2.some(argument3,argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [705,595,1.7976931348623157e+308,705,1.7976931348623157e+308,618,-1,213,655]
var r_3= undefined
try {
r_3 = base_3.some(argument5)
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
require("fs").writeFileSync("./experiments/some/someGen/test540.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)