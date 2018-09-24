





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0 = ""
argument1[4] = [714,403]
return a-b/c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[6] = {"655":122,"1.5767903703001245e+307":126,"":"1","H%":"*o!O+C}x#[cR!"}
argument3[1] = null
return a/b/c
};
var argument3 = {"242":"","618":"M","8.606364880503901e+307":9.582379970235081e+307,"4.397743439412942e+307":"e4","2.4069430386738567e+307":5e-324,"1.7590099391463304e+308":783,"":8.632761298071421e+307,"n(:":3.4429645317548083e+307,"!+V":"S","2.0625510375405084e+307":1.4307839945916214e+308};
var argument4 = r_0;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6 = null
return a*b*c
};
var argument6 = r_2;
var argument7 = "6c!";
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[5] = null
base_3['length'] = ""
return a/b+c
};
var argument9 = r_0;
var base_0 = [705,969]
var r_0= undefined
try {
r_0 = base_0.some(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [705,969]
var r_1= undefined
try {
r_1 = base_1.some(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [705,969]
var r_2= undefined
try {
r_2 = base_2.some(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [705,969]
var r_3= undefined
try {
r_3 = base_3.some(argument8,argument9)
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
require("fs").writeFileSync("./experiments/some/someGen/test236.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)