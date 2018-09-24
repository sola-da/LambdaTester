/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = function callback(){callbackArguments.push(arguments)};
var argument2 = null;
var argument3 = {"157":0,"627":242,"4.224481734419934e+307":"","-100":1.2769112843143498e+308,"":655,"9.052137017295402e+307":"-{q","1.519597092818457e+308":""};
var argument4 = function callback(){callbackArguments.push(arguments)};
var argument5 = {"157":-100,"460":1.6486421028132502e+308,"607":"","783":"","3.076993917858282e+306":"x","+":893,"8.069271064658986e+307":1.5461869814156302e+308,"1.5784028129598612e+308":"dD"};
var argument6 = false;
var argument7 = function callback(){callbackArguments.push(arguments)};
var argument8 = null;
var argument9 = function callback(){callbackArguments.push(arguments)};
var argument10 = r_0;
var argument11 = r_0;
var base_0 = p1
var r_0= undefined
try {
r_0 = base_0.then(argument1,argument2,argument3)
}
catch(e) {
r_0= e.message
}
var base_1 = p2
var r_1= undefined
try {
r_1 = base_1.catch(argument4,argument5,argument6)
}
catch(e) {
r_1= e.message
}
var base_2 = p2
var r_2= undefined
try {
r_2 = base_2.then(argument7,argument8)
}
catch(e) {
r_2= e.message
}
var base_3 = p1
var r_3= undefined
try {
r_3 = base_3.catch(argument9,argument10,argument11)
}
catch(e) {
r_3= e.message
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
require("fs").writeFileSync("./experiments/promises/promiseEmpty/test972.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)