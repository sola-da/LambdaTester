





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[1]['d'] = {"":3.183301726410263e+307}
argument2[618] = ""
base_0[2]['f'] = ""
return a+b-c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0][2] = true
argument3[607] = 618
return a+b*c
};
var argument3 = r_1;
var argument4 = true;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[157] = false
base_2[5] = 627
argument6[1]['d'] = "<"
return a/b*c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8['T'] = true
base_3['length'] = false
base_3[3][4] = null
return a/b/c
};
var base_0 = [1.7976931348623157e+308,627,-1,242,213,59,1.7976931348623157e+308,49,595]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [1.7976931348623157e+308,627,-1,242,213,59,1.7976931348623157e+308,49,595]
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [1.7976931348623157e+308,627,-1,242,213,59,1.7976931348623157e+308,49,595]
var r_2= undefined
try {
r_2 = base_2.map(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [1.7976931348623157e+308,627,-1,242,213,59,1.7976931348623157e+308,49,595]
var r_3= undefined
try {
r_3 = base_3.map(argument6)
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
require("fs").writeFileSync("./experiments/map/mapGen/test752.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)