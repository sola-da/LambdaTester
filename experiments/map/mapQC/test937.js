





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return 92.89617247703525; };
var argument2 = null;
var argument3 = "5";
var argument4 = function() {
 callbackArguments.push(arguments) 
 return 30.098921760917328; };
var argument5 = false;
var argument6 = 893;
var argument7 = function() {
 callbackArguments.push(arguments) 
 return [true,null,true,"EP",0.2163042218302813]; };
var argument8 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument9 = true;
var argument10 = null;
var base_0 = [843,595,607,100,893,655,59,893,126,460]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [843,595,607,100,893,655,59,893,126,460]
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.map(argument7)
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
require("fs").writeFileSync("./experiments/map/mapQC/test937.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)