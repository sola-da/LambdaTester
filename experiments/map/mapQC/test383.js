





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return [false,0,1,6.959403095433788,-0.9033184848733171,-20,-32,{"1Ö[":false,"WA­×":"K","¨>È":-3.1193149850085886,"j":false,"¼":true}]; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return -31.230970993199247; };
var argument3 = null;
var argument4 = false;
var argument5 = function() {
 callbackArguments.push(arguments) 
 return -63; };
var argument6 = r_0;
var argument7 = false;
var argument8 = function() {
 callbackArguments.push(arguments) 
 return "Ë\u001e\u0013Á"; };
var argument9 = null;
var argument10 = r_0;
var base_0 = [714]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [714]
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.map(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/map/mapQC/test383.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)