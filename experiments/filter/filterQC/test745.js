





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return [false,null,{"\b":0.8808307526447341},[],null,null]; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return {"naW":0.9310938093713246,"xc":1.6219876167494691,"\u0019EN\u0012|Öc":0,"­\u000fñ³ÌZ":-15,"È+¡\f:":-4.13745945753326,"È\u001fl":-10.939812638173315}; };
var argument3 = "l";
var argument4 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument5 = "C";
var argument6 = r_1;
var argument7 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var base_0 = [893,705,705,893,969,714,59,126]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,705,705,893,969,714,59,126]
var r_1= undefined
try {
r_1 = base_1.filter(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.filter(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.filter(argument7)
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
require("fs").writeFileSync("./experiments/filter/filterQC/test745.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)