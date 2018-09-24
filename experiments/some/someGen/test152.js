





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
return a+b*c
};
var argument2 = null;
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[2] = 82
argument5 = {"714":"","823":"","":8.031834077842752e+307,"1.6743358381653017e+308":7.962849213036684e+307,"(":"1L","2.720154560212796e+307":""}
argument5[2.249941463060761e+307] = {}
return a/b/c
};
var argument5 = null;
var argument6 = {"242":"8","969":49,"1.0782994975049405e+308":"","":""};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[8] = "8,FZfO"
base_2 = false
return a-b+c
};
var argument8 = 627;
var argument9 = false;
var argument10 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[5] = "L"
base_3[1][8] = null
return a-b*c
};
var argument11 = null;
var argument12 = null;
var base_0 = ["<","`","P","$","]Bsr3#","6]","Du","+","U"]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["<","`","P","$","]Bsr3#","6]","Du","+","U"]
var r_1= undefined
try {
r_1 = base_1.some(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["<","`","P","$","]Bsr3#","6]","Du","+","U"]
var r_2= undefined
try {
r_2 = base_2.some(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["<","`","P","$","]Bsr3#","6]","Du","+","U"]
var r_3= undefined
try {
r_3 = base_3.some(argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/some/someGen/test152.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)