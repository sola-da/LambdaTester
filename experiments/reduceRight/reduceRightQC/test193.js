





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument2 = {"82":"","126":705,"213":"b","823":714,"Y?>4":"d^@","":"]"};
var argument3 = function() {
 callbackArguments.push(arguments) 
 return 58.56795347643955; };
var argument4 = null;
var argument5 = ["8y2"];
var argument6 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument7 = r_2;
var argument8 = function() {
 callbackArguments.push(arguments) 
 return {"+\"î\u0007ò":-0.8901938279001813,"_":true,"4^£g":1,"X8°«\u0005":"¶ç","¤\u001c":"}¼¼","¼Ñú]":38}; };
var argument9 = 460;
var base_0 = [49,705,969,627,126]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [49,705,969,627,126]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [49,705,969,627,126]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [49,705,969,627,126]
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightQC/test193.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)