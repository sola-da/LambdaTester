





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return {"\u001e¦\u001a=ª2pË":false,":qlQCöå":[]}; };
var argument2 = {"25":"Pi","403":1.2840008892422456e+308,"1.426061396655673e+308":595,"1.5389120886538473e+307":25};
var argument3 = function() {
 callbackArguments.push(arguments) 
 return -95.81496448054263; };
var argument4 = {};
var argument5 = null;
var argument6 = function() {
 callbackArguments.push(arguments) 
 return 16.616733229501612; };
var argument7 = function() {
 callbackArguments.push(arguments) 
 return true; };
var argument8 = false;
var argument9 = true;
var base_0 = ["X"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.reduce(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.reduce(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["X"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/reduce/reduceQC/test894.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)