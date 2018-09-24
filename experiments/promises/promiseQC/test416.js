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
var argument2 = "";
var argument3 = 9.882180110266454e+307;
var argument4 = p1;
var argument5 = function() {
callbackArguments.push(arguments)
 return -50; }
;
var argument6 = null;
var argument7 = r_0;
var argument8 = function() {
callbackArguments.push(arguments)
 return -93.45898317709975; }
;
var argument9 = function() {
callbackArguments.push(arguments)
 return 
"é\f\\\u001e\u000bñAÒ8Ñ":-0.9959050056384846,"!Ú9øï±á":false,"Ô\u0006zÉ/t":15,"ø¶r\u001e\u0014":13,"\u0012":-13,"dÔ»é®":-35.63480229976644}; }
;
var argument10 = ["7","r","an","G","4","$",";","y","n=Ip="];
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
r_1 = base_1.then(argument4,argument5,argument6)
}
catch(e) {
r_1= e.message
}
var base_2 = p1
var r_2= undefined
try {
r_2 = base_2.then(argument7,argument8)
}
catch(e) {
r_2= e.message
}
var base_3 = r_2
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
require("fs").writeFileSync("./experiments/promises/promiseQC/test416.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)