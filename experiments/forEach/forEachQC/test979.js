





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument2 = null;
var argument3 = "k%";
var argument4 = function() {
 callbackArguments.push(arguments) 
 return "W¨\u001còJ¡\u0004="; };
var argument5 = r_1;
var argument6 = function() {
 callbackArguments.push(arguments) 
 return -98; };
var argument7 = [705,"b",714,122,"JUg","B",893,"d}",-1,"_"];
var argument8 = function() {
 callbackArguments.push(arguments) 
 return {"1;±":false,"1ì":"ùÔ","³uüþ·\r\u000fîã":-6.735721932102012}; };
var base_0 = [",","]5","Oj4%","8","e"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [",","]5","Oj4%","8","e"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [",","]5","Oj4%","8","e"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [",","]5","Oj4%","8","e"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachQC/test979.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)