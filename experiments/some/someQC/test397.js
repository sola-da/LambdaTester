





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return {"Ð-Uo":true,"¢s\u001c":2.6342609885582497,"¢Z4ÐRk":7.596513858119356,"+~¥õ":-9,"'ð¥¥T¢7":false}; };
var argument2 = null;
var argument3 = true;
var argument4 = function() {
 callbackArguments.push(arguments) 
 return -57.75688789229299; };
var argument5 = null;
var argument6 = function() {
 callbackArguments.push(arguments) 
 return 38.90806734630414; };
var argument7 = r_2;
var argument8 = null;
var argument9 = function() {
 callbackArguments.push(arguments) 
 return -83; };
var base_0 = ["p;","M)A[k",")X[z","|"]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["p;","M)A[k",")X[z","|"]
var r_1= undefined
try {
r_1 = base_1.some(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["p;","M)A[k",")X[z","|"]
var r_2= undefined
try {
r_2 = base_2.some(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["p;","M)A[k",")X[z","|"]
var r_3= undefined
try {
r_3 = base_3.some(argument9)
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
require("fs").writeFileSync("./experiments/some/someQC/test397.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)