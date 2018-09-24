





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return -25; };
var argument2 = false;
var argument3 = function() {
 callbackArguments.push(arguments) 
 return false; };
var argument4 = "k9q";
var argument5 = [-1,783,49,0,969,49,595,705,49];
var argument6 = function() {
 callbackArguments.push(arguments) 
 return true; };
var argument7 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument8 = {"4":"","460":1.4022964601796481e+308,"":"","]$vc":242,"<":627,"QB":"","E":""};
var base_0 = [595,"4","kyOh","M","I{sW","$","{k",823,"wKs"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.filter(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.filter(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [595,"4","kyOh","M","I{sW","$","{k",823,"wKs"]
var r_3= undefined
try {
r_3 = base_3.filter(argument7,argument8)
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
require("fs").writeFileSync("./experiments/filter/filterQC/test379.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)