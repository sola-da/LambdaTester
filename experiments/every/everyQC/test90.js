





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return 51; };
var argument2 = true;
var argument3 = 1.7762170015239209e+308;
var argument4 = function() {
 callbackArguments.push(arguments) 
 return -55; };
var argument5 = [59,714,714,0,783];
var argument6 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument7 = "";
var argument8 = function() {
 callbackArguments.push(arguments) 
 return {"^+\u0002§M¼ËH\u001bÛ":-0.9083163486002395,"%":true,"ò\f":true,"\"Djçeéì":" ","ÁØí\u0015\u0005íç":[null,[]],"ë<$rB\u0016ÕV":[null,true,null]}; };
var base_0 = ["o",59]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["o",59]
var r_1= undefined
try {
r_1 = base_1.every(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["o",59]
var r_2= undefined
try {
r_2 = base_2.every(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["o",59]
var r_3= undefined
try {
r_3 = base_3.every(argument8)
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
require("fs").writeFileSync("./experiments/every/everyQC/test90.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)