





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return 0; };
var argument2 = false;
var argument3 = 242;
var argument4 = function() {
 callbackArguments.push(arguments) 
 return 34.02516997246367; };
var argument5 = null;
var argument6 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument7 = function() {
 callbackArguments.push(arguments) 
 return false; };
var argument8 = 1.276894359288257e+308;
var base_0 = [126,-1,122,969,1.7976931348623157e+308,403,122,969,122,460]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [126,-1,122,969,1.7976931348623157e+308,403,122,969,122,460]
var r_1= undefined
try {
r_1 = base_1.find(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [126,-1,122,969,1.7976931348623157e+308,403,122,969,122,460]
var r_2= undefined
try {
r_2 = base_2.find(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [126,-1,122,969,1.7976931348623157e+308,403,122,969,122,460]
var r_3= undefined
try {
r_3 = base_3.find(argument7,argument8)
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
require("fs").writeFileSync("./experiments/find/findQC/test13.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)