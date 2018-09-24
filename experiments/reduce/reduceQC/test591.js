





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return "A@jkÄ"; };
var argument2 = null;
var argument3 = function() {
 callbackArguments.push(arguments) 
 return -61; };
var argument4 = function() {
 callbackArguments.push(arguments) 
 return {"_ÁAÖ¨>õ8":-0.5685719697215119,"\fm":"èd","´(£]\u0003ïBÖ":4.143859453226646,"*ùù+6":8.682775894724887,"µ¸£\u0011Ç,9;":"DMÐP·","Í":["ª",true,"\u0011"]}; };
var argument5 = function() {
 callbackArguments.push(arguments) 
 return -32; };
var base_0 = [595,82]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [595,82]
var r_1= undefined
try {
r_1 = base_1.reduce(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [595,82]
var r_2= undefined
try {
r_2 = base_2.reduce(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.reduce(argument5)
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
require("fs").writeFileSync("./experiments/reduce/reduceQC/test591.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)