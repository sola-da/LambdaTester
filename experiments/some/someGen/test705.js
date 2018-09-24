





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[1.5109538778533692e+308] = ["0","K","?","EH"]
return a-b*c
};
var argument2 = " ";
var argument3 = [157,"#DBx","*",1.7976931348623157e+308,"XC"];
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[705] = true
argument6[3] = 8.065077630999408e+306
argument5[7] = ["z^OP","&4"]
return a/b/c
};
var argument5 = 783;
var argument6 = [242,823];
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[9.551053197482062e+307] = null
return a+b/c
};
var argument8 = null;
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[1] = 1.062044017872627e+307
argument11[0] = ["PfT",595,"O","{"]
base_3[1][3] = "+"
return a*b/c
};
var base_0 = ["sPm","AME*","OY",")","+4","$<lBNR :","D?","f"]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["sPm","AME*","OY",")","+4","$<lBNR :","D?","f"]
var r_1= undefined
try {
r_1 = base_1.some(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["sPm","AME*","OY",")","+4","$<lBNR :","D?","f"]
var r_2= undefined
try {
r_2 = base_2.some(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["sPm","AME*","OY",")","+4","$<lBNR :","D?","f"]
var r_3= undefined
try {
r_3 = base_3.some(argument9)
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
require("fs").writeFileSync("./experiments/some/someGen/test705.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)