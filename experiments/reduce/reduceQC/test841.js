





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return -2; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return 50; };
var argument3 = r_1;
var argument4 = 1.3696723485080881e+308;
var argument5 = function() {
 callbackArguments.push(arguments) 
 return {":ö\u001eÞ":0,"^":0,"â_":3.6103712203526905,"óm\u0001'no":7,"ñ":8.600042170389372,"\u0018\\Ns":"yÇ\u0000","Ô~¶Í":21,"ò·x\u0014´Pÿ\u0012@":[null,-0.11016586148162966,"Ø"]}; };
var argument6 = false;
var argument7 = function() {
 callbackArguments.push(arguments) 
 return false; };
var argument8 = null;
var argument9 = {"_-ES":"","z":"vj","9.909100233718465e+307":8.161418917223845e+307,"":9.11692363500481e+307,"1.0595421975912154e+308":"","7.555922204484267e+307":100,"1.3691234894117159e+308":";L","9.905049037681848e+307":8.302802967033115e+307,"G,":2.2651219993924675e+307};
var base_0 = [403,5e-324]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [403,5e-324]
var r_1= undefined
try {
r_1 = base_1.reduce(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [403,5e-324]
var r_2= undefined
try {
r_2 = base_2.reduce(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [403,5e-324]
var r_3= undefined
try {
r_3 = base_3.reduce(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/reduce/reduceQC/test841.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)