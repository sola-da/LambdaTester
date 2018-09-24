/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = function() {
callbackArguments.push(arguments)
 return false; }
;
var argument2 = p2;
var argument3 = function() {
callbackArguments.push(arguments)
 return [-0.23268820634271936,true,-1,[false],true,"\f¬©",2]; }
;
var argument4 = {"100":"U<","":3.9337595751185645e+307,"-100":"","XLrI":"+4","Z(":"b","iB":"@","V":1.1047149918025306e+308,"1.0585352962677962e+308":""};
var argument5 = function() {
callbackArguments.push(arguments)
 return undefined; }
;
var argument6 = [714,714,49,969,893,-100,0,460,705];
var argument7 = "Z1F+'";
var argument8 = function() {
callbackArguments.push(arguments)
 return undefined; }
;
var base_0 = p1
var r_0= undefined
try {
r_0 = base_0.then(argument1)
}
catch(e) {
r_0= e.message
}
var base_1 = p2
var r_1= undefined
try {
r_1 = base_1.then(argument2,argument3,argument4)
}
catch(e) {
r_1= e.message
}
var base_2 = p2
var r_2= undefined
try {
r_2 = base_2.catch(argument5,argument6,argument7)
}
catch(e) {
r_2= e.message
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.catch(argument8)
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
require("fs").writeFileSync("./experiments/promises/promiseQC/test224.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)