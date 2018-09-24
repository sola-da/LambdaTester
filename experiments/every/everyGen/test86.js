





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[8] = {"2.834301612235577e+307":1.7976931348623157e+308,"":"eWwn8%"}
base_0[0] = [893,213,-1,893,403]
return a-b-c
};
var argument2 = {"403":213,"823":627,"8.257342613678691e+307":"w"};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1 = [242,242,627,655,714,460,969,49,595]
argument4[4] = "4"
argument4[0] = ["a",25]
return a*b/c
};
var argument4 = {};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2 = 1.147945496628e+308
argument6[403] = "$"
base_2[9] = ""
return a-b-c
};
var argument6 = null;
var argument7 = 714;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3['length'] = null
base_3 = 655
return a*b+c
};
var base_0 = [783,618,82,"su=L","!%<t",">;Ja=",893,627]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [783,618,82,"su=L","!%<t",">;Ja=",893,627]
var r_1= undefined
try {
r_1 = base_1.every(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [783,618,82,"su=L","!%<t",">;Ja=",893,627]
var r_2= undefined
try {
r_2 = base_2.every(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [783,618,82,"su=L","!%<t",">;Ja=",893,627]
var r_3= undefined
try {
r_3 = base_3.every(argument8)
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
require("fs").writeFileSync("./experiments/every/everyGen/test86.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)