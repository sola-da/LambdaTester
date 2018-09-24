





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1][0] = "QL"
return a-b-c
};
var argument2 = false;
var argument3 = {"403":"","655":"@$i","":"wGGM!","6.238529230416802e+307":9.58365731040654e+307,"1.7976931348623157e+308":100,"-100":1.5494624257869865e+307,"1.6139879554455084e+308":"21"};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5['_W'] = {"59":"7ts","460":"","655":460,"843":7.217294431082675e+306,"1.5345892516090565e+308":"","":"a","fDVXQdoi":"","1.0628972144226967e+308":"J","3.915266758546662e+307":4.834482206729264e+306}
argument5[5] = 607
base_1[1][0] = ["]g"," ","$g@","$",">i&]q","?b","}M(","^","d|"]
return a*b/c
};
var argument5 = r_1;
var argument6 = r_1;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[9] = 7.503958240052756e+307
return a-b-c
};
var argument8 = "";
var argument9 = 607;
var argument10 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[5][0] = 6.61250628036803e+307
base_3[5] = 714
argument12[403] = 1.479226339633983e+308
return a+b-c
};
var base_0 = ["e|","V]","}","G","U","T&"]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["e|","V]","}","G","U","T&"]
var r_1= undefined
try {
r_1 = base_1.some(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["e|","V]","}","G","U","T&"]
var r_2= undefined
try {
r_2 = base_2.some(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["e|","V]","}","G","U","T&"]
var r_3= undefined
try {
r_3 = base_3.some(argument10)
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
require("fs").writeFileSync("./experiments/some/someGen/test331.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)