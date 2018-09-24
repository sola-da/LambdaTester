





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return {"Ý\u000bÝÌÂ6°":"\u0007","rW§x¬":true,"Ä<êøÀó":true,";\u0004ÿb_Øy":true,"§£qþ?Ó":-10.07066976794222,"v%=Y\u0005\u0016\n!\u000eY":true,"ðæÉ\u0001":-4,"olMV/\u0016":34}; };
var argument3 = true;
var argument4 = false;
var argument5 = function() {
 callbackArguments.push(arguments) 
 return true; };
var argument6 = true;
var argument7 = null;
var argument8 = function() {
 callbackArguments.push(arguments) 
 return -53; };
var argument9 = "&awHt";
var argument10 = false;
var base_0 = ["AVF",618,"l","qimm","K",82,595,655,"l@"]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.map(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/map/mapQC/test45.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)