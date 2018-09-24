





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return {"#ÅRxì¤`\u001b":0,"OêÅÔ\u0018£º":"T","Ã":true,"\u0016²tKÿ¼\"Â":-15,"¾z±ä":3,"ÇG\n§Z\u0004":true,"Ý\u0019±_ð":23.06569425408286,"3dâÑ<":10.966349677723386}; };
var argument3 = "";
var argument4 = ["6","_","P","Lq4#Ns","}Xx","6","6bSf","1mF","s"];
var argument5 = function() {
 callbackArguments.push(arguments) 
 return 86; };
var argument6 = null;
var argument7 = function() {
 callbackArguments.push(arguments) 
 return true; };
var argument8 = null;
var base_0 = [627,460,49,59,82,-1,823,82,783]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [627,460,49,59,82,-1,823,82,783]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [627,460,49,59,82,-1,823,82,783]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [627,460,49,59,82,-1,823,82,783]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7,argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachQC/test479.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)