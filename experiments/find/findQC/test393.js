





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return 26.218098546194746; };
var argument2 = {"2":"n","607":"","823":"G`E","":969,"jhl":1.831237042928498e+307,"ww":"n[NPe","6.31947709794753e+307":"","F":"JG"};
var argument3 = function() {
 callbackArguments.push(arguments) 
 return -45; };
var argument4 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument5 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var base_0 = [783,"gFZfEi",595,"@","+",25,"<",-1,1.7976931348623157e+308]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [783,"gFZfEi",595,"@","+",25,"<",-1,1.7976931348623157e+308]
var r_1= undefined
try {
r_1 = base_1.find(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [783,"gFZfEi",595,"@","+",25,"<",-1,1.7976931348623157e+308]
var r_2= undefined
try {
r_2 = base_2.find(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [783,"gFZfEi",595,"@","+",25,"<",-1,1.7976931348623157e+308]
var r_3= undefined
try {
r_3 = base_3.find(argument5)
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
require("fs").writeFileSync("./experiments/find/findQC/test393.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)