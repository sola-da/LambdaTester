





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return 99; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return "¢"; };
var argument3 = {};
var argument4 = r_1;
var argument5 = function() {
 callbackArguments.push(arguments) 
 return [0,[],null,null,7.568742301606203,24]; };
var argument6 = {"49":"","":"f"};
var argument7 = "S";
var argument8 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument9 = "";
var argument10 = null;
var base_0 = ["70",460]
var r_0= undefined
try {
r_0 = base_0.some(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["70",460]
var r_1= undefined
try {
r_1 = base_1.some(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["70",460]
var r_2= undefined
try {
r_2 = base_2.some(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["70",460]
var r_3= undefined
try {
r_3 = base_3.some(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/some/someQC/test669.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)