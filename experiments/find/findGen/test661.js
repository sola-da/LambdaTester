





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[-1] = {"Ni":2.843434824953765e+307,"9.63859300844463e+307":1.5636636120578772e+308}
argument3['LK'] = null
return a-b*c
};
var argument2 = false;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[0] = "nN$Z"
return a/b*c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[8] = {"893":"C^","YRX@mI;":"j[","1.6867483653433583e+308":2.2147584710189238e+307,"kM":969}
base_2[9] = null
base_2[0] = "J"
return a-b+c
};
var argument5 = null;
var argument6 = false;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[4] = [783,100,893,893,49,126,460,1.7976931348623157e+308,0,-1]
argument8[1.0500354979187844e+308] = null
return a-b*c
};
var base_0 = ["Z",242,"t1","jz6@","RZ",893,"c%:o>",823]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["Z",242,"t1","jz6@","RZ",893,"c%:o>",823]
var r_1= undefined
try {
r_1 = base_1.find(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["Z",242,"t1","jz6@","RZ",893,"c%:o>",823]
var r_2= undefined
try {
r_2 = base_2.find(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["Z",242,"t1","jz6@","RZ",893,"c%:o>",823]
var r_3= undefined
try {
r_3 = base_3.find(argument7)
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
require("fs").writeFileSync("./experiments/find/findGen/test661.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)