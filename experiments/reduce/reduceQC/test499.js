





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return "1©\u0007\u0017"; };
var argument2 = true;
var argument3 = "(^:v";
var argument4 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument5 = r_0;
var argument6 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument7 = function() {
 callbackArguments.push(arguments) 
 return 79.86517975616579; };
var argument8 = null;
var argument9 = true;
var base_0 = [714,"qx%",595,705,893,"SE","je"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [714,"qx%",595,705,893,"SE","je"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [714,"qx%",595,705,893,"SE","je"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [714,"qx%",595,705,893,"SE","je"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/reduce/reduceQC/test499.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)