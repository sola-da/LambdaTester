





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return "H¶1/X?"; };
var argument2 = 1.7976931348623157e+308;
var argument3 = function() {
 callbackArguments.push(arguments) 
 return false; };
var argument4 = null;
var argument5 = function() {
 callbackArguments.push(arguments) 
 return 63; };
var argument6 = ["L","r","+","on","j3","mt=","Z","|"];
var argument7 = {"100":1.1207930465337737e+308,"1.7690134087965453e+308":3.397030658312975e+307,"4.349855073289407e+307":"","+!":"","7.922350724606276e+307":"Og","":"","@#":1.4164188664283715e+308,"1.146086214579171e+307":""};
var argument8 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var base_0 = [49,100,"*Duh",607,595,":",-1,969,705]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [49,100,"*Duh",607,595,":",-1,969,705]
var r_1= undefined
try {
r_1 = base_1.some(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [49,100,"*Duh",607,595,":",-1,969,705]
var r_2= undefined
try {
r_2 = base_2.some(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [49,100,"*Duh",607,595,":",-1,969,705]
var r_3= undefined
try {
r_3 = base_3.some(argument8)
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
require("fs").writeFileSync("./experiments/some/someQC/test59.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)