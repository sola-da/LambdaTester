





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1][2] = false
return a/b/c
};
var argument2 = {"0":607,"5.225468584041855e+307":59,"1mam":"HR"};
var argument3 = true;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5['io'] = 969
base_1[1][4] = null
base_1[1] = 627
return a*b/c
};
var argument5 = false;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0][2] = {"5.02042809586577e+307":"","1.2937688691187048e+308":1.1786689050097398e+308,"6.263652309049228e+307":"Z","N8":9.642977733891336e+307,"7.092005658226656e+306":"","1.031302238815958e+308":"+G","9'Hz']":"gEm%"}
base_2[0][2] = ""
return a+b+c
};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[6.447566193969e+307] = ["o","8","z","=","tY"]
argument8[0] = ["<^f","f"]
return a*b/c
};
var base_0 = ["L",25,"s08aZ(","^{","UM$`",969]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["L",25,"s08aZ(","^{","UM$`",969]
var r_1= undefined
try {
r_1 = base_1.every(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["L",25,"s08aZ(","^{","UM$`",969]
var r_2= undefined
try {
r_2 = base_2.every(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["L",25,"s08aZ(","^{","UM$`",969]
var r_3= undefined
try {
r_3 = base_3.every(argument7)
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
require("fs").writeFileSync("./experiments/every/everyGen/test968.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)