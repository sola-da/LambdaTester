





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return -56; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return 13; };
var argument3 = function() {
 callbackArguments.push(arguments) 
 return 7; };
var argument4 = {"25":"","618":893,"627":126,"2.2681339198633754e+307":"","4r":"","":"*","1.4899833626456022e+308":1.0139456381302218e+308,"Ph":""};
var argument5 = function() {
 callbackArguments.push(arguments) 
 return 19; };
var argument6 = r_3;
var base_0 = [823,-1,1.7976931348623157e+308,618,403,607,607,893,-100]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.filter(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [823,-1,1.7976931348623157e+308,618,403,607,607,893,-100]
var r_2= undefined
try {
r_2 = base_2.filter(argument3,argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.filter(argument5,argument6)
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
require("fs").writeFileSync("./experiments/filter/filterQC/test794.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)