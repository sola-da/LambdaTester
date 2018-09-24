





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return "nÈ"; };
var argument2 = r_0;
var argument3 = -1;
var argument4 = function() {
 callbackArguments.push(arguments) 
 return -67.43795462746587; };
var argument5 = null;
var argument6 = function() {
 callbackArguments.push(arguments) 
 return 34; };
var argument7 = false;
var argument8 = null;
var argument9 = function() {
 callbackArguments.push(arguments) 
 return [true,false,null,[],0.6619441535317065]; };
var base_0 = [242,49,1.7976931348623157e+308,705,627,59,627,823]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [242,49,1.7976931348623157e+308,705,627,59,627,823]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [242,49,1.7976931348623157e+308,705,627,59,627,823]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [242,49,1.7976931348623157e+308,705,627,59,627,823]
var r_3= undefined
try {
r_3 = base_3.reduce(argument9)
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
require("fs").writeFileSync("./experiments/reduce/reduceQC/test547.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)