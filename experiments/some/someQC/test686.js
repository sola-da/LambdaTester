





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return [0,0,[],[],null,-17,null]; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return 89; };
var argument3 = null;
var argument4 = false;
var argument5 = function() {
 callbackArguments.push(arguments) 
 return false; };
var argument6 = {"595":1.5965483011839692e+307,"823":"A","893":"ok(","7.235748130445863e+307":5.024373897619676e+307,"7.584051725610258e+307":59};
var argument7 = false;
var argument8 = function() {
 callbackArguments.push(arguments) 
 return -52; };
var argument9 = r_0;
var base_0 = [82,-1,25]
var r_0= undefined
try {
r_0 = base_0.some(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [82,-1,25]
var r_1= undefined
try {
r_1 = base_1.some(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [82,-1,25]
var r_2= undefined
try {
r_2 = base_2.some(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [82,-1,25]
var r_3= undefined
try {
r_3 = base_3.some(argument8,argument9)
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
require("fs").writeFileSync("./experiments/some/someQC/test686.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)