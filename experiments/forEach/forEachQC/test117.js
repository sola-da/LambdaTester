





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return {"¹­*È+":true,"¦\u0005©Ó":"b","»ýÚ\u000f^»O|":-0.18920113224110757,"\u000e¶!Ó·î":2,"0ÝVo\u0015J7<":{"þ4þ":false,"":"¶","!\r½Ù":2,"­8!É":2.9392907788594425},"Ü\u000fA":false,"jé×ÉýS":false,"PSÚ":2.77608819853576}; };
var argument2 = null;
var argument3 = false;
var argument4 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument5 = function() {
 callbackArguments.push(arguments) 
 return 72.26551031670387; };
var argument6 = r_2;
var argument7 = r_1;
var argument8 = function() {
 callbackArguments.push(arguments) 
 return 80.16523371267728; };
var argument9 = true;
var base_0 = [",G9f)W","4",")","=eYBiT$i`","r<Czq"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [",G9f)W","4",")","=eYBiT$i`","r<Czq"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [",G9f)W","4",")","=eYBiT$i`","r<Czq"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [",G9f)W","4",")","=eYBiT$i`","r<Czq"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8,argument9)
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
require("fs").writeFileSync("./experiments/forEach/forEachQC/test117.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)