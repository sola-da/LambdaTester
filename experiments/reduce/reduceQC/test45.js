





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return "yO£òØ"; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return 28; };
var argument3 = true;
var argument4 = false;
var argument5 = function() {
 callbackArguments.push(arguments) 
 return -11; };
var argument6 = true;
var argument7 = null;
var argument8 = function() {
 callbackArguments.push(arguments) 
 return -44.6589142941733; };
var argument9 = "&awHt";
var argument10 = false;
var base_0 = ["AVF",618,"l","qimm","K",82,595,655,"l@"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["AVF",618,"l","qimm","K",82,595,655,"l@"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["AVF",618,"l","qimm","K",82,595,655,"l@"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["AVF",618,"l","qimm","K",82,595,655,"l@"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/reduce/reduceQC/test45.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)