





var callbackArguments = [];
var argument1 = function callback(){callbackArguments.push(arguments)};
var argument2 = "G";
var argument3 = [403,607,460,1.7976931348623157e+308,-1,714,403];
var argument4 = function callback(){callbackArguments.push(arguments)};
var argument5 = null;
var argument6 = r_1;
var argument7 = function callback(){callbackArguments.push(arguments)};
var argument8 = function callback(){callbackArguments.push(arguments)};
var argument9 = true;
var argument10 = {"":""};
var base_0 = ["QK","_w(","6","rz"," O","m"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["QK","_w(","6","rz"," O","m"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["QK","_w(","6","rz"," O","m"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["QK","_w(","6","rz"," O","m"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/forEach/forEachEmpty/test439.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)