





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return -97.71541908339631; };
var argument2 = null;
var argument3 = false;
var argument4 = function() {
 callbackArguments.push(arguments) 
 return [false,null,null,4.326987505495635,true,8]; };
var argument5 = false;
var argument6 = ["TLMRiuz","Z4S",");]^"];
var argument7 = function() {
 callbackArguments.push(arguments) 
 return -5.0872046506130975; };
var argument8 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var base_0 = [25,714,460]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.filter(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.filter(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [25,714,460]
var r_3= undefined
try {
r_3 = base_3.filter(argument8)
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
require("fs").writeFileSync("./experiments/filter/filterQC/test192.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)