





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return 94.49178294993708; };
var argument2 = false;
var argument3 = null;
var argument4 = function() {
 callbackArguments.push(arguments) 
 return -36; };
var argument5 = function() {
 callbackArguments.push(arguments) 
 return 7; };
var argument6 = [823,5e-324,823];
var argument7 = function() {
 callbackArguments.push(arguments) 
 return -64.96206392301946; };
var argument8 = null;
var argument9 = {"783":4.666656114562914e+307,"969":100,"b":"%(:","1.5865272803217277e+308":"]","":242,"*kxH1DZ":1.6631238688668988e+308};
var base_0 = ["sY;",655,122,"K","OX8wq[",460,";",49,"M5"]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["sY;",655,122,"K","OX8wq[",460,";",49,"M5"]
var r_1= undefined
try {
r_1 = base_1.find(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["sY;",655,122,"K","OX8wq[",460,";",49,"M5"]
var r_2= undefined
try {
r_2 = base_2.find(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["sY;",655,122,"K","OX8wq[",460,";",49,"M5"]
var r_3= undefined
try {
r_3 = base_3.find(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/find/findQC/test105.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)