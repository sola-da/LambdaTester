





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return {"!ÏûÄ/N,":0,"@\u000b\u0011 ":0,"åÍ":7.610769261575128,"õ\u0018":-11.304480249787114,">zõme;ä":33,"NN|}T£ßÙ^":false,"ù\ts":10}; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return false; };
var argument3 = function() {
 callbackArguments.push(arguments) 
 return 73; };
var argument4 = "a";
var argument5 = function() {
 callbackArguments.push(arguments) 
 return -16; };
var base_0 = [49,607,893,82,843,607,82]
var r_0= undefined
try {
r_0 = base_0.some(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [49,607,893,82,843,607,82]
var r_1= undefined
try {
r_1 = base_1.some(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [49,607,893,82,843,607,82]
var r_2= undefined
try {
r_2 = base_2.some(argument3,argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [49,607,893,82,843,607,82]
var r_3= undefined
try {
r_3 = base_3.some(argument5)
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
require("fs").writeFileSync("./experiments/some/someQC/test691.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)