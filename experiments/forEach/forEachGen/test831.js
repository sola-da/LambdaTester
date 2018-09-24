





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[49] = "v"
return a+b*c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[4][4] = true
base_1[9] = "T6S2"
argument2[2] = null
return a/b-c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4['D'] = "o"
argument4[1.3130321063336282e+308] = "+k7qp"
argument5[7] = 403
return a/b-c
};
var argument4 = [843,242];
var argument5 = r_0;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[8] = {"82":893,"126":"Mz","Cr":1.5506774094180723e+308,"?":"%t@L","Rqcvw":"k","":5.892247906613178e+306,"R)h[":9.960394160280884e+307,"1.5459853588272627e+308":1.5562550035357305e+308}
argument7[157] = {"2":"","126":"N","X0|":9.458682646591296e+307,"4.785060182808313e+307":"Q2(`%","1.2860070003462931e+308":"","":""}
return a+b+c
};
var base_0 = [5e-324,0]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [5e-324,0]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [5e-324,0]
var r_2= undefined
try {
r_2 = base_2.forEach(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [5e-324,0]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test831.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)