





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return [0,false,2.0756355018916173,-4.753969482799293,-12.981732034374897,-14.769092164851754,-19,-31]; };
var argument2 = 49;
var argument3 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument4 = r_0;
var argument5 = true;
var argument6 = function() {
 callbackArguments.push(arguments) 
 return -27.22994047119125; };
var argument7 = true;
var argument8 = function() {
 callbackArguments.push(arguments) 
 return [0,true,false,"\u001b",true]; };
var argument9 = true;
var base_0 = ["|",213,893,627,460,59,"i"]
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
r_1 = base_1.map(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["|",213,893,627,460,59,"i"]
var r_2= undefined
try {
r_2 = base_2.map(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.map(argument8,argument9)
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
require("fs").writeFileSync("./experiments/map/mapQC/test365.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)