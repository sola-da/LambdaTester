





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return 72.90292758683042; };
var argument2 = null;
var argument3 = [213,100,";"];
var argument4 = function() {
 callbackArguments.push(arguments) 
 return true; };
var argument5 = false;
var argument6 = function() {
 callbackArguments.push(arguments) 
 return {"#}ºÎ":-0.35988293332485366,"k¼\u0000»c2î`":"æ3","ýË·á`":true}; };
var argument7 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var base_0 = ["S?)",82,"nTu","Y",-1,"H##-","M"]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["S?)",82,"nTu","Y",-1,"H##-","M"]
var r_1= undefined
try {
r_1 = base_1.some(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["S?)",82,"nTu","Y",-1,"H##-","M"]
var r_2= undefined
try {
r_2 = base_2.some(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["S?)",82,"nTu","Y",-1,"H##-","M"]
var r_3= undefined
try {
r_3 = base_3.some(argument7)
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
require("fs").writeFileSync("./experiments/some/someQC/test224.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)