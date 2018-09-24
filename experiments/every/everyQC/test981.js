





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return [0.14159029012880886,false,null]; };
var argument2 = r_0;
var argument3 = function() {
 callbackArguments.push(arguments) 
 return "¸\u0016"; };
var argument4 = r_0;
var argument5 = function() {
 callbackArguments.push(arguments) 
 return {"ar\u0011²îÿEÙn":[],"":0,"5]\"ö":14.684532962147461,"qé4ï·L<":false,"ù|":true,"\n5.":true}; };
var argument6 = true;
var argument7 = function() {
 callbackArguments.push(arguments) 
 return 11; };
var base_0 = [607,100,122,82,893,242]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [607,100,122,82,893,242]
var r_1= undefined
try {
r_1 = base_1.every(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [607,100,122,82,893,242]
var r_2= undefined
try {
r_2 = base_2.every(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [607,100,122,82,893,242]
var r_3= undefined
try {
r_3 = base_3.every(argument7)
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
require("fs").writeFileSync("./experiments/every/everyQC/test981.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)