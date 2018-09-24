





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return -51.028659417438085; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return {"\r":"Õ","©­/\u0015äV[±":false,",\u000bzÇë\u000f":0,"Ù^ó\u0018F¿a©":false,"!ãõ4¾\u0019":18}; };
var argument3 = function() {
 callbackArguments.push(arguments) 
 return 27.923907939350713; };
var argument4 = null;
var argument5 = null;
var argument6 = function() {
 callbackArguments.push(arguments) 
 return true; };
var base_0 = [0,403,460,59]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [0,403,460,59]
var r_1= undefined
try {
r_1 = base_1.filter(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.filter(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [0,403,460,59]
var r_3= undefined
try {
r_3 = base_3.filter(argument6)
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
require("fs").writeFileSync("./experiments/filter/filterQC/test884.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)