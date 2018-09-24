





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[2.249941463060761e+307] = ["k",49,893,25,"I","T",595,1.7976931348623157e+308,"c`"]
return a/b*c
};
var argument2 = "x";
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[5][0] = false
base_1[2] = {"100":705,"783":"y","1.6710185517151263e+308":"","`":"u","":714,"1.5535600492368559e+308":"","hm":"","1.3435829872183634e+308":"p "}
return a-b+c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2 = null
base_2[9] = ""
return a+b-c
};
var argument5 = false;
var argument6 = "Y";
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[1][2] = 1.1048360373584132e+308
argument8[618] = "_"
return a/b-c
};
var argument8 = null;
var base_0 = [242,893,49,-1,126,460,100,59]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [242,893,49,-1,126,460,100,59]
var r_1= undefined
try {
r_1 = base_1.some(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [242,893,49,-1,126,460,100,59]
var r_2= undefined
try {
r_2 = base_2.some(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [242,893,49,-1,126,460,100,59]
var r_3= undefined
try {
r_3 = base_3.some(argument7,argument8)
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
require("fs").writeFileSync("./experiments/some/someGen/test214.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)