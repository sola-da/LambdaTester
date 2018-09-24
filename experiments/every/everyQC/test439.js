





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return {"\u0016ï":0,"¬":0,"ÚT¾\"\u0005¼j\u0010ß":0,"8\f¼R%":true,"Ì":false,";¹¸":-3.9461725478607548,"Ris¿\u0002ÂêyÚ":-15.911557509269471}; };
var argument2 = "G";
var argument3 = [403,607,460,1.7976931348623157e+308,-1,714,403];
var argument4 = function() {
 callbackArguments.push(arguments) 
 return -99.58906935890136; };
var argument5 = null;
var argument6 = r_1;
var argument7 = function() {
 callbackArguments.push(arguments) 
 return "¼"; };
var argument8 = function() {
 callbackArguments.push(arguments) 
 return true; };
var argument9 = true;
var argument10 = {"":""};
var base_0 = ["QK","_w(","6","rz"," O","m"]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["QK","_w(","6","rz"," O","m"]
var r_1= undefined
try {
r_1 = base_1.every(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["QK","_w(","6","rz"," O","m"]
var r_2= undefined
try {
r_2 = base_2.every(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["QK","_w(","6","rz"," O","m"]
var r_3= undefined
try {
r_3 = base_3.every(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/every/everyQC/test439.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)