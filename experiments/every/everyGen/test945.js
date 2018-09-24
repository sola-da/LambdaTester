





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2 = false
base_0[0][6] = ""
argument2[3.3156198695370476e+307] = -1
return a+b+c
};
var argument2 = [100,82];
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[122] = {"49":126,"i":"","3.1928749360341723e+307":126,"Qa":""}
argument4[8] = "22$Zr"
argument3[2] = ""
return a+b+c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[0] = "RF0|"
argument5[0] = false
base_2[2][7] = {"242":"","607":59,"6.898675368803997e+307":"-","4.2025645035627986e+307":460,"2!":"","":460}
return a/b/c
};
var argument5 = null;
var argument6 = 1.3339926154483323e+308;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[4][1.5144566325729397e+308] = ""
argument8[122] = 1.044068178599084e+307
base_3[0] = false
return a*b/c
};
var argument8 = null;
var argument9 = ">v";
var base_0 = ["q%_!2","`n"]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["q%_!2","`n"]
var r_1= undefined
try {
r_1 = base_1.every(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["q%_!2","`n"]
var r_2= undefined
try {
r_2 = base_2.every(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["q%_!2","`n"]
var r_3= undefined
try {
r_3 = base_3.every(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/every/everyGen/test945.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)