





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return "eAÕ\u0010Eè¢Ø"; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return {"×FÌ\u0007":0.5841292832162739,"q:":0.913001738026282,"\b\u0004\fùèª":false,"~\fè":5}; };
var argument3 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument4 = 627;
var argument5 = function() {
 callbackArguments.push(arguments) 
 return -62; };
var argument6 = null;
var argument7 = [157,893,157,25,-1,-100,607,-1,460];
var base_0 = ["9","B","mlE9D","`","2","B","{","[","b"]
var r_0= undefined
try {
r_0 = base_0.every(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["9","B","mlE9D","`","2","B","{","[","b"]
var r_1= undefined
try {
r_1 = base_1.every(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["9","B","mlE9D","`","2","B","{","[","b"]
var r_2= undefined
try {
r_2 = base_2.every(argument3,argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["9","B","mlE9D","`","2","B","{","[","b"]
var r_3= undefined
try {
r_3 = base_3.every(argument5,argument6,argument7)
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
require("fs").writeFileSync("./experiments/every/everyQC/test501.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)