





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument2 = true;
var argument3 = function() {
 callbackArguments.push(arguments) 
 return {"J\u0019T!e¤5£":0,"\u0019W«\u0016A":true,"°K8":false,"l1¥É":-3,"å\u0012'´":true,"\u0005;Â(a\u0000p+":[0,true],"y6[OÝ\"":43.93573598485277,"d°È ":-37.93001755440971}; };
var argument4 = null;
var argument5 = function() {
 callbackArguments.push(arguments) 
 return true; };
var argument6 = "";
var argument7 = function() {
 callbackArguments.push(arguments) 
 return false; };
var argument8 = 1.4557550546344659e+308;
var argument9 = r_0;
var base_0 = [627,49]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [627,49]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [627,49]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [627,49]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/forEach/forEachQC/test20.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)