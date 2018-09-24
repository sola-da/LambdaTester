





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return "Ú þ"; };
var argument2 = {"607":126};
var argument3 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument4 = r_0;
var argument5 = function() {
 callbackArguments.push(arguments) 
 return -57.27259588827187; };
var argument6 = [49,783,627,25,82,893,157];
var argument7 = "";
var argument8 = function() {
 callbackArguments.push(arguments) 
 return {"\u0016áU]":0,"8\u001cý\r":0.7699518301938304,"ë\u0018è":false,"}dp+r\u0015":-2,"ÕýK/z":true,"C\u0014ë.òj":-5.654034672799198,"_j;\u0003µÄ.":true}; };
var base_0 = [242,"+"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [242,"+"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [242,"+"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [242,"+"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachQC/test3.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)