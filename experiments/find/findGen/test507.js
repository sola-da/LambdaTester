





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[1.0500354979187844e+308] = "k"
base_0[6][4] = [126,126,-1,82,1.7976931348623157e+308,-100,-1]
argument3[126] = ["K","<5","5","q"]
return a-b*c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[7] = [607,627,595,100,126,0,655,595,126]
return a+b/c
};
var argument3 = {"627":82,"893":"","1.9766530338898563e+306":"5+9","":"","1C":"","1.481798058557502e+308":"E)","K[":"","<8":"","1.7555331522355558e+306":""};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[6] = null
return a+b+c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6['='] = null
argument6[1] = {"":"","4.0411039143503114e+307":8.945183955071631e+307,"2.349196023123544e+307":"s","9.521819094097483e+307":1.4841206614572459e+308,"ej":"","2.7959087307496806e+307":""}
return a*b+c
};
var base_0 = ["Dh","4","V","Id","k","N","y5t>R)","Fh","p2,4="]
var r_0= undefined
try {
r_0 = base_0.find(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["Dh","4","V","Id","k","N","y5t>R)","Fh","p2,4="]
var r_1= undefined
try {
r_1 = base_1.find(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["Dh","4","V","Id","k","N","y5t>R)","Fh","p2,4="]
var r_2= undefined
try {
r_2 = base_2.find(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["Dh","4","V","Id","k","N","y5t>R)","Fh","p2,4="]
var r_3= undefined
try {
r_3 = base_3.find(argument5)
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
require("fs").writeFileSync("./experiments/find/findGen/test507.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)