





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return 27; };
var argument2 = "L";
var argument3 = 82;
var argument4 = function() {
 callbackArguments.push(arguments) 
 return -50.797893702451624; };
var argument5 = null;
var argument6 = false;
var argument7 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument8 = ["3","<","^","]<2F","A|","d","p","Q","q"];
var argument9 = function() {
 callbackArguments.push(arguments) 
 return 9; };
var base_0 = [5e-324,893,618,"p","0",843,"2)","b"]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [5e-324,893,618,"p","0",843,"2)","b"]
var r_1= undefined
try {
r_1 = base_1.find(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [5e-324,893,618,"p","0",843,"2)","b"]
var r_2= undefined
try {
r_2 = base_2.find(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [5e-324,893,618,"p","0",843,"2)","b"]
var r_3= undefined
try {
r_3 = base_3.find(argument9)
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
require("fs").writeFileSync("./experiments/find/findQC/test744.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)