





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return true; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return [null,true,0.6125698548277629,-5.290178023657445,null]; };
var argument3 = true;
var argument4 = null;
var argument5 = function() {
 callbackArguments.push(arguments) 
 return "bq\u0005\u001bÝ"; };
var argument6 = ["E3","E",100,"W","XE"];
var argument7 = function() {
 callbackArguments.push(arguments) 
 return -78.4454544167222; };
var base_0 = ["B",",",-100,"<","{",100,"gmQ;N","n",0,714]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["B",",",-100,"<","{",100,"gmQ;N","n",0,714]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["B",",",-100,"<","{",100,"gmQ;N","n",0,714]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument7)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightQC/test754.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)