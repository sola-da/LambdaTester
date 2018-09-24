





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[1.4034744228995816e+308] = 5.566563232390716e+307
argument2[1] = {"607":823,"714":":","":"","1.0163501847266972e+308":1.2566326977853592e+308,"-O":"","1.4984466323823388e+308":242}
return a*b+c
};
var argument2 = r_0;
var argument3 = r_0;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[3][0] = 1.693657200647655e+308
return a*b-c
};
var argument5 = r_0;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[1] = 1.7976931348623157e+308
argument7['-'] = null
argument7[126] = 1.6570405617051782e+308
return a*b*c
};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[4][4] = false
base_3[4][4] = {"59":0,"213":"","2.826108946211585e+307":"Mhc","":"3","at":"Qav"}
base_3[0][1] = null
return a+b-c
};
var argument8 = ["b","9","?","R","u"];
var argument9 = {"783":7.617762862573461e+307,"843":",","":969,"fc":969,"I":59,"7.409321026783806e+307":"#F"};
var base_0 = [25,-1,242,82,460,1.7976931348623157e+308,-100,-1]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [25,-1,242,82,460,1.7976931348623157e+308,-100,-1]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [25,-1,242,82,460,1.7976931348623157e+308,-100,-1]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [25,-1,242,82,460,1.7976931348623157e+308,-100,-1]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test587.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)