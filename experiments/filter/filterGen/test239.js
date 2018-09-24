





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[1] = {"655":122,"1.5767903703001245e+307":126,"":"1","H%":"*o!O+C}x#[cR!"}
base_0[3][0] = null
return a/b/c
};
var argument2 = {"242":"","618":"M","8.606364880503901e+307":9.582379970235081e+307,"4.397743439412942e+307":"e4","2.4069430386738567e+307":5e-324,"1.7590099391463304e+308":783,"":8.632761298071421e+307,"n(:":3.4429645317548083e+307,"!+V":"S","2.0625510375405084e+307":1.4307839945916214e+308};
var argument3 = false;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[2] = null
return a*b*c
};
var argument5 = r_1;
var argument6 = "6c!";
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[7] = null
base_2['length'] = ""
return a/b+c
};
var argument8 = false;
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[3.7154103611117224e+307] = {"403":9.885192399648506e+307,"618":969,"969":"","1.7976931348623157e+308":1.501504710884216e+308,"_":"","":"e","9.895294639369108e+307":82,"ff":"B18"}
return a-b-c
};
var base_0 = [-100,25,969,460,157,100,714,714,403,403]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.filter(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-100,25,969,460,157,100,714,714,403,403]
var r_2= undefined
try {
r_2 = base_2.filter(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.filter(argument9)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test239.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)