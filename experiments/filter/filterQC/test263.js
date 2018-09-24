





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return 31; };
var argument2 = ["v!7AJ",893,")",627,969,";fto","5",1.7976931348623157e+308];
var argument3 = function() {
 callbackArguments.push(arguments) 
 return -89; };
var argument4 = r_1;
var argument5 = "";
var argument6 = function() {
 callbackArguments.push(arguments) 
 return 24; };
var argument7 = [157,655,100,59,595];
var argument8 = null;
var argument9 = function() {
 callbackArguments.push(arguments) 
 return 54.456031373002524; };
var argument10 = r_2;
var argument11 = false;
var base_0 = [823,"n",213,"$Fu@",25,"b",627,5e-324,"8a"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [823,"n",213,"$Fu@",25,"b",627,5e-324,"8a"]
var r_1= undefined
try {
r_1 = base_1.filter(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [823,"n",213,"$Fu@",25,"b",627,5e-324,"8a"]
var r_2= undefined
try {
r_2 = base_2.filter(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.filter(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/filter/filterQC/test263.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)