





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument2 = false;
var argument3 = false;
var argument4 = function() {
 callbackArguments.push(arguments) 
 return [null,null,2.9310385670451753,7.0287471670300885,null,null,false,[true,0.10754826394375905,false,8.61602469256445,null]]; };
var argument5 = function() {
 callbackArguments.push(arguments) 
 return "2\u001d\u001eµ²¡"; };
var argument6 = true;
var argument7 = null;
var argument8 = function() {
 callbackArguments.push(arguments) 
 return -41; };
var base_0 = [403,122,242,5e-324,126,969,25]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [403,122,242,5e-324,126,969,25]
var r_1= undefined
try {
r_1 = base_1.filter(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.filter(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.filter(argument8)
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
require("fs").writeFileSync("./experiments/filter/filterQC/test667.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)