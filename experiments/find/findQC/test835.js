





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument2 = false;
var argument3 = function() {
 callbackArguments.push(arguments) 
 return 2.3486605477905487; };
var argument4 = 2.244672515745814e+307;
var argument5 = [157,100,157,25,-100,823,1.7976931348623157e+308,-1,25];
var argument6 = function() {
 callbackArguments.push(arguments) 
 return 28.256690769173677; };
var argument7 = "Sx";
var argument8 = true;
var argument9 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument10 = "P";
var argument11 = true;
var base_0 = ["0(","+","d",":","Y","^t"]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["0(","+","d",":","Y","^t"]
var r_1= undefined
try {
r_1 = base_1.find(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["0(","+","d",":","Y","^t"]
var r_2= undefined
try {
r_2 = base_2.find(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["0(","+","d",":","Y","^t"]
var r_3= undefined
try {
r_3 = base_3.find(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/find/findQC/test835.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)