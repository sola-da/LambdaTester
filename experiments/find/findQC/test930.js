





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return [0.05028648456020646,-0.8956225461977134,"\u0003",{"±©":0}]; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return {"ÚáWlE":0,"ìò»­þn{Ó":0.2805205310912102,"Â":2.8054792521382588,"Y\u001d¡W":false,"$\u001d(q":-20}; };
var argument3 = function() {
 callbackArguments.push(arguments) 
 return 36.08219431322801; };
var argument4 = null;
var argument5 = [714,213,157,-100,1.7976931348623157e+308];
var argument6 = function() {
 callbackArguments.push(arguments) 
 return 1.3477928771548298; };
var base_0 = [25,893,25,969,-100,0,607,-1]
var r_0= undefined
try {
r_0 = base_0.find(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [25,893,25,969,-100,0,607,-1]
var r_1= undefined
try {
r_1 = base_1.find(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [25,893,25,969,-100,0,607,-1]
var r_2= undefined
try {
r_2 = base_2.find(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [25,893,25,969,-100,0,607,-1]
var r_3= undefined
try {
r_3 = base_3.find(argument6)
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
require("fs").writeFileSync("./experiments/find/findQC/test930.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)