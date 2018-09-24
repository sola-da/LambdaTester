





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return -70; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return "ìzZÐ"; };
var argument3 = false;
var argument4 = {"4.3016022729243e+307":"ypP","9.86517183011537e+307":"","":""};
var argument5 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument6 = function() {
 callbackArguments.push(arguments) 
 return [null,true,false,true,10.464412154312736,9.418232789071778,-16.43750830400548,null]; };
var argument7 = [-100,59,100,823,122,607,607];
var base_0 = ["dt",157,"U","Ne","%"]
var r_0= undefined
try {
r_0 = base_0.some(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["dt",157,"U","Ne","%"]
var r_1= undefined
try {
r_1 = base_1.some(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["dt",157,"U","Ne","%"]
var r_2= undefined
try {
r_2 = base_2.some(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["dt",157,"U","Ne","%"]
var r_3= undefined
try {
r_3 = base_3.some(argument6,argument7)
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
require("fs").writeFileSync("./experiments/some/someQC/test750.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)