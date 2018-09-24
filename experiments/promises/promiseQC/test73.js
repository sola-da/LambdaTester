/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = null;
var argument2 = function() {
callbackArguments.push(arguments)
 return ["ç",0,false,-0.8957038347455177,15.22521203652514,[false],false,-3]; }
;
var argument3 = false;
var argument4 = function() {
callbackArguments.push(arguments)
 return 39.23902137846669; }
;
var argument5 = {"J":"","":8.772593840550357e+307,"5.122759301007701e+307":"","7.883890002325242e+307":"w3","9.25205146482183e+307":"","9.643084600690929e+306":"7","N":9.345737151132805e+307};
var argument6 = null;
var argument7 = function() {
callbackArguments.push(arguments)
 return 32; }
;
var argument8 = null;
var argument9 = false;
var argument10 = function() {
callbackArguments.push(arguments)
 return -75; }
;
var argument11 = p1;
var argument12 = r_2;
var base_0 = p2
var r_0= undefined
try {
r_0 = base_0.then(argument1,argument2,argument3)
}
catch(e) {
r_0= e.message
}
var base_1 = p1
var r_1= undefined
try {
r_1 = base_1.catch(argument4,argument5,argument6)
}
catch(e) {
r_1= e.message
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.catch(argument7,argument8,argument9)
}
catch(e) {
r_2= e.message
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.catch(argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/promises/promiseQC/test73.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)