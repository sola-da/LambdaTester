





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return -17; };
var argument2 = true;
var argument3 = null;
var argument4 = function() {
 callbackArguments.push(arguments) 
 return -16; };
var argument5 = "O#m|zhSRI";
var argument6 = true;
var argument7 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument8 = function() {
 callbackArguments.push(arguments) 
 return 75.32518907096866; };
var argument9 = true;
var base_0 = ["7,","n","0","X","_","s{{","60","{","r"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["7,","n","0","X","_","s{{","60","{","r"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["7,","n","0","X","_","s{{","60","{","r"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["7,","n","0","X","_","s{{","60","{","r"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument8,argument9)
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
require("fs").writeFileSync("./experiments/reduce/reduceQC/test524.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)