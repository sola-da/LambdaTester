





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return "P"; };
var argument2 = {};
var argument3 = true;
var argument4 = function() {
 callbackArguments.push(arguments) 
 return true; };
var argument5 = [100,25,"-:",82,0,126,"9"];
var argument6 = {"893":82,"1.186828344358107e+307":">","rw":9.928075970541438e+306};
var argument7 = function() {
 callbackArguments.push(arguments) 
 return "ÍR"; };
var argument8 = 460;
var argument9 = 655;
var argument10 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument11 = r_3;
var argument12 = null;
var base_0 = [843,122,-100,242,607]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [843,122,-100,242,607]
var r_1= undefined
try {
r_1 = base_1.some(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [843,122,-100,242,607]
var r_2= undefined
try {
r_2 = base_2.some(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [843,122,-100,242,607]
var r_3= undefined
try {
r_3 = base_3.some(argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/some/someQC/test149.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)