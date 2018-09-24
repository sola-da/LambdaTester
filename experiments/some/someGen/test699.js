





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[2][5e-324] = true
argument3[2] = 1.035702591744876e+308
return a-b/c
};
var argument2 = {"627":"","893":"r","9.769991451578944e+307":5.105336415460564e+307,"":4.4186061656597003e+307,"3.579007301704811e+307":"|6uy"};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[7] = ""
argument3[4] = ""
return a/b/c
};
var argument4 = null;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[4][8] = null
argument6[0] = [213,100,126,-100,82,655,0]
argument5[4] = true
return a*b*c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7['5L'] = 2.8730638155992577e+307
argument8['V'] = [157,"<^","z","B0CcY",1.7976931348623157e+308,"J",893]
argument8['V'] = 1.913808814065794e+307
return a-b*c
};
var argument7 = r_2;
var base_0 = [627,460,627,242,0]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [627,460,627,242,0]
var r_1= undefined
try {
r_1 = base_1.some(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [627,460,627,242,0]
var r_2= undefined
try {
r_2 = base_2.some(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [627,460,627,242,0]
var r_3= undefined
try {
r_3 = base_3.some(argument6,argument7)
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
require("fs").writeFileSync("./experiments/some/someGen/test699.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)