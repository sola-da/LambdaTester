





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return 63.32554771453667; };
var argument2 = false;
var argument3 = {"25":"","157":893,"":"n","1.6126112213832594e+308":3.275840543545729e+307,"1.0872355614047976e+308":"","4.27881565499769e+307":"","1.4879799254041304e+308":"","v":1.4463593219997616e+308,")":1.4361705512837688e+308,"5.488884905446732e+307":""};
var argument4 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument5 = function() {
 callbackArguments.push(arguments) 
 return -69; };
var argument6 = function() {
 callbackArguments.push(arguments) 
 return -38; };
var argument7 = null;
var argument8 = 242;
var base_0 = [242,403,595,893,-100,25,893,823]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [242,403,595,893,-100,25,893,823]
var r_1= undefined
try {
r_1 = base_1.map(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.map(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.map(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/map/mapQC/test670.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)