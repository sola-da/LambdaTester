





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[1] = false
return a*b*c/d
};
var argument2 = 607;
var argument3 = false;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[6] = {"595":618,"893":"f","":"","5.009845743866708e+307":"","wh":"W4x;","6.914503957325654e+307":""}
argument5[4] = {}
return a+b/c*d
};
var argument5 = false;
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[3] = ""
argument8[8] = null
return a+b*c-d
};
var argument7 = {"n4":"","1.7976931348623157e+308":893,"yC&":1.4868693313115482e+308,"":8.919963785872028e+307,"1.183895266631e+308":5.201142534041882e+307};
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[8] = null
argument8[0] = {"0":893,"403":"","460":"Ff","969":6.996211073007563e+307,"":627,"1.539013017934425e+306":25,"6.535600982704818e+307":783,"1.3107131183454087e+308":"","e":2.2217589797191006e+307,"4.534792221502822e+307":""}
return a-b/c/d
};
var argument9 = null;
var argument10 = ["i{ZI","@4","[","-"];
var base_0 = [242,213,403,607,49,82,714,705]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [242,213,403,607,49,82,714,705]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [242,213,403,607,49,82,714,705]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [242,213,403,607,49,82,714,705]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test767.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)