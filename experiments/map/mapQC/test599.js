





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument2 = 59;
var argument3 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument4 = {"-100":"","":59,"8.823449940628329e+307":"",")u":""};
var argument5 = function() {
 callbackArguments.push(arguments) 
 return -65; };
var argument6 = 1.0524924637770407e+308;
var argument7 = r_0;
var argument8 = function() {
 callbackArguments.push(arguments) 
 return 50.586966492954424; };
var argument9 = 9.855699700856025e+307;
var argument10 = true;
var base_0 = ["]",595,"#",49,157,"J"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["]",595,"#",49,157,"J"]
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.map(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/map/mapQC/test599.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)