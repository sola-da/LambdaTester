





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return -81; };
var argument2 = [242,213,100];
var argument3 = null;
var argument4 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument5 = r_1;
var argument6 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument7 = function() {
 callbackArguments.push(arguments) 
 return {"à":0.4619330692116761,"/\u0010\\":-0.2606949859017551,"üú·\u0013DþÄ«":[]}; };
var argument8 = ["A","II"];
var base_0 = ["KXH","xn","N","8 ","m"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["KXH","xn","N","8 ","m"]
var r_1= undefined
try {
r_1 = base_1.filter(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["KXH","xn","N","8 ","m"]
var r_2= undefined
try {
r_2 = base_2.filter(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
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
require("fs").writeFileSync("./experiments/filter/filterQC/test338.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)