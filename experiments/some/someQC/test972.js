





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return -91.45238823505655; };
var argument2 = null;
var argument3 = function() {
 callbackArguments.push(arguments) 
 return "c "; };
var argument4 = ["oS","G"];
var argument5 = function() {
 callbackArguments.push(arguments) 
 return 42; };
var argument6 = ["Qt9","(","8mN","_nU","}"];
var argument7 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument8 = true;
var argument9 = r_0;
var base_0 = [893,403,893,122,-1,213,25,618]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,403,893,122,-1,213,25,618]
var r_1= undefined
try {
r_1 = base_1.some(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,403,893,122,-1,213,25,618]
var r_2= undefined
try {
r_2 = base_2.some(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,403,893,122,-1,213,25,618]
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
require("fs").writeFileSync("./experiments/some/someQC/test972.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)