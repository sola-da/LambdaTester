





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return -30; };
var argument2 = 0;
var argument3 = 1.6202219505451485e+308;
var argument4 = function() {
 callbackArguments.push(arguments) 
 return 31.40340559814685; };
var argument5 = 2.6939117275199605e+307;
var argument6 = function() {
 callbackArguments.push(arguments) 
 return false; };
var argument7 = r_0;
var argument8 = function() {
 callbackArguments.push(arguments) 
 return {"'Åê½Ö¬\" ":-0.876477272632679,"ü\u001d\r{MhbU\u0004":false,"Î¦Ç\u0002ø»":5.209188840018573,",3E\u0014a\u001fêa":false,"5\u0003":true}; };
var argument9 = null;
var base_0 = [969,460,-1,823]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [969,460,-1,823]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [969,460,-1,823]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [969,460,-1,823]
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
require("fs").writeFileSync("./experiments/forEach/forEachQC/test700.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)