





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[3] = {"783":";","9WT4V":893}
base_0 = ""
base_0[7] = "dz"
return a*b-c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3['am'] = null
argument3[2][783] = 1.1367240029666855e+308
argument3[0] = null
return a/b/c
};
var argument3 = 607;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[3][0] = ""
argument5[4.224481734419934e+307] = {"969":"U","D":"","1.7976931348623157e+308":"%","c":4.1416160571218973e+307,"1.2528714671851125e+308":"","8.817205138034203e+307":8.77689412583853e+307,"1.471921936394348e+308":7.38326654669319e+306,"+5l3":8.214244099213866e+307,"1.304393975305568e+308":1.4754790833357358e+308,"8.684916922642612e+307":"pg4"}
return a-b*c
};
var argument5 = "I";
var argument6 = null;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[7.92397107964922e+307] = 0
argument8[1] = 403
base_3[1][1] = 2.1168454459846874e+307
return a/b-c
};
var argument8 = r_1;
var base_0 = ["Xe"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["Xe"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["Xe"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["Xe"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7,argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test414.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)