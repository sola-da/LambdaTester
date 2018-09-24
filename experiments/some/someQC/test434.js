





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return 32; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return true; };
var argument3 = function() {
 callbackArguments.push(arguments) 
 return {"\u0013öâc\u001eF":true,"'M¶´ß":0,"@÷Ù7\u0010~LÑ":true,"\u000e±p²Ä1":-1.9646460680535647,"S?":6.0174282136846,"b@¥\tì":-22.156679029163257,"Æpøü":18,"STä Uð":-33.15602640822478}; };
var argument4 = 157;
var argument5 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument6 = false;
var base_0 = [893,843,82,823,655,122,655,627,595]
var r_0= undefined
try {
r_0 = base_0.some(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,843,82,823,655,122,655,627,595]
var r_1= undefined
try {
r_1 = base_1.some(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,843,82,823,655,122,655,627,595]
var r_2= undefined
try {
r_2 = base_2.some(argument3,argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,843,82,823,655,122,655,627,595]
var r_3= undefined
try {
r_3 = base_3.some(argument5,argument6)
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
require("fs").writeFileSync("./experiments/some/someQC/test434.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)