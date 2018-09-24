





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[3.3156198695370476e+307] = ""
base_0[1][4] = true
base_0[1][4] = 1.2286254711975761e+308
return a-b+c
};
var argument2 = false;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[1.9097830510613482e+307] = false
base_1[2] = {"242":"","a":126,"":"","1.647311620807208e+308":"","L":"P"}
base_1[0][0] = 460
return a+b+c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2 = 5.441956733855995e+307
argument6[2.4183178393969103e+306] = true
return a-b-c
};
var argument5 = false;
var argument6 = "";
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9 = 49
base_3[6] = ["pd","|","+"]
argument8[6] = {"122":893,"213":5.314327711494224e+307,"655":"","823":1.1449157378549655e+308,"o!(0k":"zG2","":"J","j^'":"][1MI","2.2730340800864496e+306":"Z"}
return a+b+c
};
var argument8 = ["Yq","K#Wh6","q",",","dR#="];
var base_0 = ["XLjW1","u",":","`","p"]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["XLjW1","u",":","`","p"]
var r_1= undefined
try {
r_1 = base_1.every(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["XLjW1","u",":","`","p"]
var r_2= undefined
try {
r_2 = base_2.every(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["XLjW1","u",":","`","p"]
var r_3= undefined
try {
r_3 = base_3.every(argument7,argument8)
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
require("fs").writeFileSync("./experiments/every/everyGen/test852.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)