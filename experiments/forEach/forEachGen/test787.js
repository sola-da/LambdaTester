





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[0] = null
argument2['$*I'] = -1
argument2['-'] = null
return a-b/c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3['D'] = false
base_1[0][823] = "G"
return a+b/c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0] = {"25":"ke","714":"","1.6671265916044191e+308":1.7085982147703092e+308,"1.0920454768759994e+308":"-","":"0G62["}
argument4[5] = null
argument4['?'] = 157
return a/b*c
};
var argument4 = {"59":"f","9l":""};
var argument5 = null;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[460] = true
argument6 = "Y9="
argument6[7.92397107964922e+307] = null
return a-b-c
};
var argument7 = {"100":2.775296243701774e+307,"714":"4 ","":49};
var base_0 = ["2G)",">",213,"5ka6","Cs","A"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["2G)",">",213,"5ka6","Cs","A"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["2G)",">",213,"5ka6","Cs","A"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["2G)",">",213,"5ka6","Cs","A"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6,argument7)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test787.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)