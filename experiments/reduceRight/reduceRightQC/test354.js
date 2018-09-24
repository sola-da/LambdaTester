





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return 87.43554326661649; };
var argument2 = true;
var argument3 = function() {
 callbackArguments.push(arguments) 
 return "ïæ\u0015Ò"; };
var argument4 = true;
var argument5 = r_1;
var argument6 = function() {
 callbackArguments.push(arguments) 
 return [-0.5287322044356764,[],-0.17116768423321727,"#«",true]; };
var argument7 = null;
var argument8 = r_1;
var argument9 = function() {
 callbackArguments.push(arguments) 
 return 51.44075710205629; };
var argument10 = false;
var argument11 = r_1;
var base_0 = [627,157,618,595,49,403,460,49,460]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [627,157,618,595,49,403,460,49,460]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [627,157,618,595,49,403,460,49,460]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [627,157,618,595,49,403,460,49,460]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightQC/test354.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)