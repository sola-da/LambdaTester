





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return ";Þ\u0012UöB"; };
var argument2 = 403;
var argument3 = function() {
 callbackArguments.push(arguments) 
 return -75.95784299421675; };
var argument4 = null;
var argument5 = function() {
 callbackArguments.push(arguments) 
 return 9.016905837172784; };
var argument6 = ["y"];
var argument7 = function() {
 callbackArguments.push(arguments) 
 return -43; };
var argument8 = true;
var argument9 = r_3;
var base_0 = [893,82,618,100]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.map(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/map/mapQC/test645.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)