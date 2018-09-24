





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[5] = {"":"","g%'!":"","oCL":""}
base_0['length'] = {"":"","9.918107617469983e+307":"d<"}
return a*b+c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3 = ["!","P"]
return a+b*c
};
var argument3 = false;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
return a+b-c
};
var argument5 = "O{rL";
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3 = {"0":9.600160771377692e+307,"5":"?","49":595,"157":"","714":"","":1.1438359852706765e+308,"HwJHVT":627,"1.693645888768421e+308":6.209818178497399e+307}
argument8 = [595,5e-324,843,25,843,969]
argument7[403] = [714,-1,213]
return a*b-c
};
var base_0 = ["?",1.7976931348623157e+308,"D8 ?","P","YWDR%","Tr0","Y",213]
var r_0= undefined
try {
r_0 = base_0.every(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["?",1.7976931348623157e+308,"D8 ?","P","YWDR%","Tr0","Y",213]
var r_1= undefined
try {
r_1 = base_1.every(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["?",1.7976931348623157e+308,"D8 ?","P","YWDR%","Tr0","Y",213]
var r_2= undefined
try {
r_2 = base_2.every(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["?",1.7976931348623157e+308,"D8 ?","P","YWDR%","Tr0","Y",213]
var r_3= undefined
try {
r_3 = base_3.every(argument6)
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
require("fs").writeFileSync("./experiments/every/everyGen/test115.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)