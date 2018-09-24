





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return "VÆ"; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return 64; };
var argument3 = [25,893,403,122,705,607,157];
var argument4 = "&Z[";
var argument5 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument6 = ["y",",i","RJ","?","7","1@p",705,25];
var argument7 = function() {
 callbackArguments.push(arguments) 
 return 84.56432995147145; };
var argument8 = true;
var argument9 = 1.7269678621059266e+308;
var base_0 = [0,100]
var r_0= undefined
try {
r_0 = base_0.some(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [0,100]
var r_1= undefined
try {
r_1 = base_1.some(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [0,100]
var r_2= undefined
try {
r_2 = base_2.some(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [0,100]
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
require("fs").writeFileSync("./experiments/some/someQC/test500.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)