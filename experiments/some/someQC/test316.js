





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return -27; };
var argument2 = true;
var argument3 = function() {
 callbackArguments.push(arguments) 
 return -59.83999354539877; };
var argument4 = null;
var argument5 = function() {
 callbackArguments.push(arguments) 
 return true; };
var argument6 = [1.7976931348623157e+308,126];
var argument7 = r_2;
var argument8 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument9 = null;
var base_0 = [")[",-1,823,"=6<>",403,"k"]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [")[",-1,823,"=6<>",403,"k"]
var r_1= undefined
try {
r_1 = base_1.some(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [")[",-1,823,"=6<>",403,"k"]
var r_2= undefined
try {
r_2 = base_2.some(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [")[",-1,823,"=6<>",403,"k"]
var r_3= undefined
try {
r_3 = base_3.some(argument8,argument9)
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
require("fs").writeFileSync("./experiments/some/someQC/test316.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)