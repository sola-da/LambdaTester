





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return 26; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return 51.54970733284443; };
var argument3 = null;
var argument4 = "o4mJ";
var argument5 = function() {
 callbackArguments.push(arguments) 
 return 15; };
var argument6 = r_2;
var argument7 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var base_0 = ["VTJY89x?","5","Q","!","q3","F|r!?","W","F"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.filter(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["VTJY89x?","5","Q","!","q3","F|r!?","W","F"]
var r_2= undefined
try {
r_2 = base_2.filter(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["VTJY89x?","5","Q","!","q3","F|r!?","W","F"]
var r_3= undefined
try {
r_3 = base_3.filter(argument7)
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
require("fs").writeFileSync("./experiments/filter/filterQC/test51.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)