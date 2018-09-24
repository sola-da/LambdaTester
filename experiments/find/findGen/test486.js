





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument1 = {"893":"","i":6.158745702963496e+307,"":1.402749035042552e+308,"3.237762892164645e+307":783,"5.221655924890218e+307":3.1601782373829644e+307,"4.173145929951183e+306":2.6811568615938406e+307}
argument2[5] = 460
return a-b+c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[126] = null
return a*b/c
};
var argument3 = true;
var argument4 = [1.7976931348623157e+308,82,969,823,-1,655];
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[893] = null
argument7['AO?'] = [607,"k,[","k",627,157,1.7976931348623157e+308,893]
argument6[1.0500354979187844e+308] = 49
return a-b*c
};
var argument6 = null;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0][1] = 403
return a*b*c
};
var base_0 = ["zCE","z0Ddf",627,25,"m","A",823,595]
var r_0= undefined
try {
r_0 = base_0.find(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["zCE","z0Ddf",627,25,"m","A",823,595]
var r_1= undefined
try {
r_1 = base_1.find(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["zCE","z0Ddf",627,25,"m","A",823,595]
var r_2= undefined
try {
r_2 = base_2.find(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["zCE","z0Ddf",627,25,"m","A",823,595]
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
require("fs").writeFileSync("./experiments/find/findGen/test486.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)