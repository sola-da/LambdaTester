





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[4] = {"25":7.315603071844654e+307,"3.3840017576851543e+307":"","1.7976931348623157e+308":"","H":"","1.5385856792371676e+308":2.8211606902173744e+307}
return a/b-c*d
};
var argument2 = 1.168054916554272e+307;
var argument3 = true;
var argument4 = {"460":"","":0,"+":"","3.0228681113213485e+307":627,"U=":"","<[r6":1.0689050026297125e+308,"6.311860308783267e+307":7.622986814944821e+307,"')":100,"#rb5":"@Mw","`":"=j+i,?"};
var argument5 = {"k":213};
var argument6 = 3.4293587436730745e+307;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[5] = {"7.811217723312674e+307":-1,"qp'":1.455455665071634e+308,"q":"k(","X":655,"1.3698378443283117e+307":-1,"u":6.688715863036189e+307,"1.531150485629332e+308":""}
return a-b-c+d
};
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[2] = false
return a*b-c-d
};
var argument9 = r_1;
var argument10 = 1.7563880895468522e+307;
var argument11 = ["C","Q","s","}4","U"];
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10 = null
return a+b+c-d
};
var base_0 = ["x","mk"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["x","mk"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5,argument6,argument7)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["x","mk"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["x","mk"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument9,argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test544.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)