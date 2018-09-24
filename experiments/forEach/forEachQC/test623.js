





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return {"X,v=2VôY\u0012":true,"ñÙ¨{":false,"\u00139ãO":0,"jé\r":-5,"\u000exÎ":"bª,{n","\\6¸":-14,"g":false,"p\u0001-½}":-11}; };
var argument2 = true;
var argument3 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument4 = true;
var argument5 = function() {
 callbackArguments.push(arguments) 
 return false; };
var argument6 = false;
var argument7 = function() {
 callbackArguments.push(arguments) 
 return 17; };
var argument8 = true;
var base_0 = ["LhIvK","s`","%EB2","[","twf","7hd"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["LhIvK","s`","%EB2","[","twf","7hd"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["LhIvK","s`","%EB2","[","twf","7hd"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["LhIvK","s`","%EB2","[","twf","7hd"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7,argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachQC/test623.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)