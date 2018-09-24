





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return 99.3762928688082; };
var argument2 = true;
var argument3 = function() {
 callbackArguments.push(arguments) 
 return false; };
var argument4 = true;
var argument5 = r_0;
var argument6 = function() {
 callbackArguments.push(arguments) 
 return {"¿åZXþ":0.40468280353226116,"Oi¡\u0015²Ó\u001f\u0005ÿ,":"#ÿ","7½®D]y°\u0000ig":"âxE","Ù":true,"uw\u0015ÝÌ":7,"Ì":31.93250737083731,"Æ\u001d²ë\u001c9":false,"a{[\u00049":[0.01754578896703718,-0.4601460923199334,-1,true,null]}; };
var argument7 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument8 = 1.0725607929530735e+308;
var argument9 = r_2;
var base_0 = [100,59,59,655,0,82,618,618,595,714]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [100,59,59,655,0,82,618,618,595,714]
var r_1= undefined
try {
r_1 = base_1.some(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [100,59,59,655,0,82,618,618,595,714]
var r_2= undefined
try {
r_2 = base_2.some(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [100,59,59,655,0,82,618,618,595,714]
var r_3= undefined
try {
r_3 = base_3.some(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/some/someQC/test609.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)