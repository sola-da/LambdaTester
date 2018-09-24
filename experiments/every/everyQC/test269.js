





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument2 = r_0;
var argument3 = function() {
 callbackArguments.push(arguments) 
 return "3V\u0004ò"; };
var argument4 = function() {
 callbackArguments.push(arguments) 
 return false; };
var argument5 = r_0;
var argument6 = function() {
 callbackArguments.push(arguments) 
 return [-0.8374213955325553,0,true,"/ª",true,{"$þe\u001a":false,"ïX¦®":0.21577113335937126},-12.415779386333718,[false,true,0.8424652419129188,null]]; };
var argument7 = 2.0638613690748862e+307;
var base_0 = [-1,"z#<"]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-1,"z#<"]
var r_1= undefined
try {
r_1 = base_1.every(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-1,"z#<"]
var r_2= undefined
try {
r_2 = base_2.every(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-1,"z#<"]
var r_3= undefined
try {
r_3 = base_3.every(argument6,argument7)
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
require("fs").writeFileSync("./experiments/every/everyQC/test269.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)