





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return 94; };
var argument2 = ["`","Q","t","`","y","O:S","BB^$>-"];
var argument3 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument4 = ["Wy","z-[$P<+","%"];
var argument5 = function() {
 callbackArguments.push(arguments) 
 return "Û0'õ%\u0005:"; };
var argument6 = function() {
 callbackArguments.push(arguments) 
 return 41; };
var argument7 = null;
var argument8 = 627;
var base_0 = [655,607,893,460,893,714,122,0,618,49]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [655,607,893,460,893,714,122,0,618,49]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [655,607,893,460,893,714,122,0,618,49]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [655,607,893,460,893,714,122,0,618,49]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachQC/test783.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)