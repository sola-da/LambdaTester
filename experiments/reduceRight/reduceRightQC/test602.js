





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return -49; };
var argument2 = null;
var argument3 = function() {
 callbackArguments.push(arguments) 
 return [0,0.7978884769173222,-0.7258715991565268,4,true,-20]; };
var argument4 = null;
var argument5 = null;
var argument6 = function() {
 callbackArguments.push(arguments) 
 return 91; };
var argument7 = true;
var argument8 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument9 = {"59":"!","460":213,"627":"","655":"","":"d1","`":242,"1.1560375467206387e+308":1.0089235770155026e+308,"E":"","1.3862473668242845e+308":82,"-100":100};
var base_0 = ["[J[m","Ly{"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["[J[m","Ly{"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument8,argument9)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightQC/test602.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)