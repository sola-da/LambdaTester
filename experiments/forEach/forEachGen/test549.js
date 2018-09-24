





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1][1] = {"4":";","49":3.4379142715015885e+307,"126":"]","595":"","969":655,"1.4281913679048546e+308":"","":1.589775868440601e+308,"8.167183558569233e+307":122,"1.3323850508881667e+308":9.216219741698471e+307}
argument2[5] = null
argument2[6] = true
return a+b*c
};
var argument2 = r_0;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[1.7394185942769049e+308] = 122
return a-b*c
};
var argument4 = null;
var argument5 = "D";
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7['-'] = ["8DW1ZP","ZYj","rv","4"]
return a+b/c
};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[4][6] = true
argument8[8] = 3.533016955726248e+307
return a/b*c
};
var argument8 = {"595":5.986537585824984e+307,"":460,"1.4893639362105718e+308":"","3.7213022303589084e+307":""};
var argument9 = true;
var base_0 = ["$L","j","i",";#","U+U"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["$L","j","i",";#","U+U"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["$L","j","i",";#","U+U"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["$L","j","i",";#","U+U"]
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test549.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)