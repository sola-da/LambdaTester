





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return 32.35539372321601; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return -88; };
var argument3 = r_0;
var argument4 = function() {
 callbackArguments.push(arguments) 
 return 80.80326212204565; };
var argument5 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument6 = 1.4806493916251252e+307;
var base_0 = [":","2","E","F","+","{x<O","PB","od","WH0,^Yj"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [":","2","E","F","+","{x<O","PB","od","WH0,^Yj"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [":","2","E","F","+","{x<O","PB","od","WH0,^Yj"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [":","2","E","F","+","{x<O","PB","od","WH0,^Yj"]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument5,argument6)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightQC/test924.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)