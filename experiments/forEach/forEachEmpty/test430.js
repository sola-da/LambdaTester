





var callbackArguments = [];
var argument1 = function callback(){callbackArguments.push(arguments)};
var argument2 = "";
var argument3 = function callback(){callbackArguments.push(arguments)};
var argument4 = {"8":714,"X;":"q","[RA":714,"":"W","1.3626005317479464e+308":1.7143114809741155e+308,"$8vE":""};
var argument5 = false;
var argument6 = function callback(){callbackArguments.push(arguments)};
var argument7 = null;
var argument8 = function callback(){callbackArguments.push(arguments)};
var base_0 = [893,"i","i<","E]=QHF6","H",893,705,"q","d"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,"i","i<","E]=QHF6","H",893,705,"q","d"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,"i","i<","E]=QHF6","H",893,705,"q","d"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,"i","i<","E]=QHF6","H",893,705,"q","d"]
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
require("fs").writeFileSync("./experiments/forEach/forEachEmpty/test430.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)