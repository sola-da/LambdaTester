





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument2 = null;
var argument3 = false;
var argument4 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument5 = true;
var argument6 = null;
var argument7 = function() {
 callbackArguments.push(arguments) 
 return 36; };
var argument8 = null;
var argument9 = {"618":6.160561778426424e+307,"893":"ycA1r;_","":"","2:":403,"HG4":"z3"};
var argument10 = function() {
 callbackArguments.push(arguments) 
 return 60.55063241364531; };
var base_0 = [82,100,893,783,242,618,-100]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [82,100,893,783,242,618,-100]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [82,100,893,783,242,618,-100]
var r_2= undefined
try {
r_2 = base_2.forEach(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [82,100,893,783,242,618,-100]
var r_3= undefined
try {
r_3 = base_3.forEach(argument10)
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
require("fs").writeFileSync("./experiments/forEach/forEachQC/test28.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)