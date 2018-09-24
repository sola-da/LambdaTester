





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return -17; };
var argument2 = true;
var argument3 = {"":"k"};
var argument4 = function() {
 callbackArguments.push(arguments) 
 return true; };
var argument5 = false;
var argument6 = true;
var argument7 = function() {
 callbackArguments.push(arguments) 
 return false; };
var argument8 = true;
var argument9 = function() {
 callbackArguments.push(arguments) 
 return 25.72284278435284; };
var argument10 = r_2;
var base_0 = [49,-1]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [49,-1]
var r_1= undefined
try {
r_1 = base_1.some(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [49,-1]
var r_2= undefined
try {
r_2 = base_2.some(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [49,-1]
var r_3= undefined
try {
r_3 = base_3.some(argument9,argument10)
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
require("fs").writeFileSync("./experiments/some/someQC/test214.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)