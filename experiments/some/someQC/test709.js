





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return 49.33659706533646; };
var argument2 = ["]","R",607];
var argument3 = true;
var argument4 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument5 = r_1;
var argument6 = function() {
 callbackArguments.push(arguments) 
 return 32.36522874104495; };
var argument7 = function() {
 callbackArguments.push(arguments) 
 return "ªÃçY"; };
var base_0 = [783]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [783]
var r_1= undefined
try {
r_1 = base_1.some(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [783]
var r_2= undefined
try {
r_2 = base_2.some(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [783]
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
require("fs").writeFileSync("./experiments/some/someQC/test709.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)