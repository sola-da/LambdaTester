/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = "i";
var argument2 = function() {
callbackArguments.push(arguments)
 return -40.04862053317593; }
;
var argument3 = null;
var argument4 = function() {
callbackArguments.push(arguments)
 return undefined; }
;
var argument5 = [823,82,126,823];
var argument6 = function() {
callbackArguments.push(arguments)
 return -44.28004558258765; }
;
var argument7 = p2;
var argument8 = [0,-1,100,157,714,59,783,460,59,403];
var argument9 = "";
var argument10 = function() {
callbackArguments.push(arguments)
 return "P,)Ì©VÙ£"; }
;
var argument11 = -100;
var base_0 = p2
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
r_1 = base_1.catch(argument4,argument5)
}
catch(e) {
r_1= e.message
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.catch(argument6,argument7,argument8)
}
catch(e) {
r_2= e.message
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.then(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/promises/promiseQC/test357.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)