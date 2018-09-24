





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return 68; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return ""; };
var argument3 = function() {
 callbackArguments.push(arguments) 
 return [null,false]; };
var argument4 = function() {
 callbackArguments.push(arguments) 
 return {"\u000fä":0.1939920468647185,"QyOú>ä\u0016":false,"È¹¯Ì¿7êf\u0010":1,"ëÝ©{DyÕàe":true,"\u0016q\n ¨¢27":-29,"`\tú©må":-54,"¹\u000e":false}; };
var argument5 = null;
var argument6 = false;
var base_0 = [1.7976931348623157e+308,"U+",242,655,"o",618]
var r_0= undefined
try {
r_0 = base_0.every(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [1.7976931348623157e+308,"U+",242,655,"o",618]
var r_1= undefined
try {
r_1 = base_1.every(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [1.7976931348623157e+308,"U+",242,655,"o",618]
var r_2= undefined
try {
r_2 = base_2.every(argument3)
}
catch(e) {
r_2= "Error"
}
var base_3 = [1.7976931348623157e+308,"U+",242,655,"o",618]
var r_3= undefined
try {
r_3 = base_3.every(argument4,argument5,argument6)
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
require("fs").writeFileSync("./experiments/every/everyQC/test471.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)