





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return 48; };
var argument2 = ["9","&"];
var argument3 = function() {
 callbackArguments.push(arguments) 
 return true; };
var argument4 = true;
var argument5 = function() {
 callbackArguments.push(arguments) 
 return {"Ð¥÷ÄãL\u001e":0.01899841794083934,"ô\u0004Îgß":"\u0019","u\u000f":-2.323404276876145,"å2óï\u00179\r":-4,"@pyÄ":true,"ß\b÷Ù\u0004ÇL\u0006":false}; };
var argument6 = function() {
 callbackArguments.push(arguments) 
 return true; };
var base_0 = [100,"f","C",595,"N","3"]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [100,"f","C",595,"N","3"]
var r_1= undefined
try {
r_1 = base_1.find(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [100,"f","C",595,"N","3"]
var r_2= undefined
try {
r_2 = base_2.find(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [100,"f","C",595,"N","3"]
var r_3= undefined
try {
r_3 = base_3.find(argument6)
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
require("fs").writeFileSync("./experiments/find/findQC/test65.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)