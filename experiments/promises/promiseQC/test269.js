/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = function() {
callbackArguments.push(arguments)
 return undefined; }
;
var argument2 = p1;
var argument3 = null;
var argument4 = function() {
callbackArguments.push(arguments)
 return true; }
;
var argument5 = null;
var argument6 = p2;
var argument7 = function() {
callbackArguments.push(arguments)
 return false; }
;
var argument8 = null;
var argument9 = function() {
callbackArguments.push(arguments)
 return 
"4Hü\u0003ú\u0002)'f+":0,">;O¬\u000f":0,"[2qÊ":false,"\t;èc":6,"ÍÛ\"g³)Å>\r":11.647822153650324,"çÜ\u0014":"è]Q"}; }
;
var argument10 = true;
var base_0 = p1
var r_0= undefined
try {
r_0 = base_0.catch(argument1,argument2,argument3)
}
catch(e) {
r_0= e.message
}
var base_1 = p1
var r_1= undefined
try {
r_1 = base_1.then(argument4,argument5,argument6)
}
catch(e) {
r_1= e.message
}
var base_2 = r_0
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
r_3 = base_3.catch(argument9,argument10)
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
require("fs").writeFileSync("./experiments/promises/promiseQC/test269.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)