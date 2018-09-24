





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return false; };
var argument2 = {"460":"","":"","5.910802449683049e+306":1.6982768805191369e+308,"1.560094157803123e+308":1.6749434638130816e+308};
var argument3 = true;
var argument4 = function() {
 callbackArguments.push(arguments) 
 return -69.39838517115784; };
var argument5 = true;
var argument6 = "";
var argument7 = function() {
 callbackArguments.push(arguments) 
 return 43.25548192310276; };
var argument8 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument9 = null;
var argument10 = r_3;
var base_0 = [-100,618,0,122,607]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-100,618,0,122,607]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-100,618,0,122,607]
var r_2= undefined
try {
r_2 = base_2.forEach(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-100,618,0,122,607]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/forEach/forEachQC/test779.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)