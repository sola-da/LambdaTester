





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return -63.4871421212726; };
var argument2 = true;
var argument3 = ["Y1U",59,"{G","0YX)_eh",1.7976931348623157e+308,1.7976931348623157e+308,714,100];
var argument4 = function() {
 callbackArguments.push(arguments) 
 return "X{G¿ÏY"; };
var argument5 = function() {
 callbackArguments.push(arguments) 
 return [null,null,null,2,true]; };
var argument6 = null;
var argument7 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument8 = null;
var argument9 = [100,714,627,0];
var base_0 = [893,";","p","f- ","S%jU;S"]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,";","p","f- ","S%jU;S"]
var r_1= undefined
try {
r_1 = base_1.some(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,";","p","f- ","S%jU;S"]
var r_2= undefined
try {
r_2 = base_2.some(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,";","p","f- ","S%jU;S"]
var r_3= undefined
try {
r_3 = base_3.some(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/some/someQC/test610.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)