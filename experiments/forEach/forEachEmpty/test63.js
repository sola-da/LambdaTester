





var callbackArguments = [];
var argument1 = function callback(){callbackArguments.push(arguments)};
var argument2 = {"157":1.6957534558372331e+308,"969":"Hd","b":1.183713806161548e+308,"":"ifi_4SW","S":8.511075693910642e+307,"AL":5.647772859287241e+306};
var argument3 = true;
var argument4 = function callback(){callbackArguments.push(arguments)};
var argument5 = r_0;
var argument6 = {"1.7964126589817205e+308":3.1478674390885843e+307};
var argument7 = function callback(){callbackArguments.push(arguments)};
var argument8 = true;
var argument9 = function callback(){callbackArguments.push(arguments)};
var base_0 = [460,"i","`","rQ",1.7976931348623157e+308,25,"]k",100,618]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [460,"i","`","rQ",1.7976931348623157e+308,25,"]k",100,618]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [460,"i","`","rQ",1.7976931348623157e+308,25,"]k",100,618]
var r_2= undefined
try {
r_2 = base_2.forEach(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [460,"i","`","rQ",1.7976931348623157e+308,25,"]k",100,618]
var r_3= undefined
try {
r_3 = base_3.forEach(argument9)
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
require("fs").writeFileSync("./experiments/forEach/forEachEmpty/test63.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)