/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = function() {
callbackArguments.push(arguments)
 return ["",true,true,false]; }
;
var argument2 = null;
var argument3 = true;
var argument4 = function() {
callbackArguments.push(arguments)
 return 26; }
;
var argument5 = function() {
callbackArguments.push(arguments)
 return undefined; }
;
var argument6 = 0;
var argument7 = [213,460,714,1.7976931348623157e+308,1.7976931348623157e+308,25,783,460];
var argument8 = function() {
callbackArguments.push(arguments)
 return "r7°"; }
;
var argument9 = [59,242,82,627];
var argument10 = {"213":126,"":"X>","L]":1.437186133221307e+308,")":"0","0f":1.542994459195303e+308,"1.0333036211286918e+308":8.325633599369436e+307,"1.0193921682455973e+306":893,"-1":"g","1.7934322767504782e+308":""};
var base_0 = p2
var r_0= undefined
try {
r_0 = base_0.then(argument1,argument2)
}
catch(e) {
r_0= e.message
}
var base_1 = p1
var r_1= undefined
try {
r_1 = base_1.then(argument3,argument4)
}
catch(e) {
r_1= e.message
}
var base_2 = p1
var r_2= undefined
try {
r_2 = base_2.catch(argument5,argument6,argument7)
}
catch(e) {
r_2= e.message
}
var base_3 = p2
var r_3= undefined
try {
r_3 = base_3.catch(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/promises/promiseQC/test583.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)