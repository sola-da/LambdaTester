





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return [[],0,"1",-5,[true],"ÒÍÕ",null,null]; };
var argument2 = [969,1.7976931348623157e+308];
var argument3 = false;
var argument4 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument5 = 126;
var argument6 = false;
var argument7 = function() {
 callbackArguments.push(arguments) 
 return -6; };
var argument8 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument9 = 893;
var base_0 = ["T",783,460,"PH",783]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.reduce(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.reduce(argument8,argument9)
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
require("fs").writeFileSync("./experiments/reduce/reduceQC/test541.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)