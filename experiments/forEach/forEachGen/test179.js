





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[2][783] = {"823":"","":"6","1.4220182383949563e+308":"G"}
argument1[7.92397107964922e+307] = false
return a/b*c
};
var argument2 = r_0;
var argument3 = {"z":82,"":"","{":"","[":"QDws|7F"};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6 = {"%*i4zC":1.0085471168195036e+308}
base_1[1][2] = [126,"CzM7(","s",783]
return a+b+c
};
var argument5 = r_0;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[1][1] = {"a":"","[":82,"e":"TB"}
return a*b-c
};
var argument7 = null;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[4] = ["1Ch",59]
base_3[2] = null
base_3[5] = true
return a*b-c
};
var argument9 = false;
var base_0 = [460,"]7",607,-100,"4",618," ","?",705,"X"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [460,"]7",607,-100,"4",618," ","?",705,"X"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [460,"]7",607,-100,"4",618," ","?",705,"X"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [460,"]7",607,-100,"4",618," ","?",705,"X"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8,argument9)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test179.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)