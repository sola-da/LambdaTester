





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return -56; };
var argument2 = ["M=m","Xu","`0{lI",":Z5:","J$GW","5LV","32","R"];
var argument3 = function() {
 callbackArguments.push(arguments) 
 return [null,0,-1,[0],"K\u001e",{"Eqk\u0017":"\r","J·\u0010&":0,"=\u00155":false,"ò2ü":[null]},true,7.431538792614954]; };
var argument4 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument5 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument6 = r_2;
var argument7 = r_1;
var base_0 = ["%HL","-","v","f","F","1"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["%HL","-","v","f","F","1"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["%HL","-","v","f","F","1"]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument5,argument6,argument7)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightQC/test275.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)