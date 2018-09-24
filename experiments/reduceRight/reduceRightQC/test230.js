





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return {"S+ÙPoP":[],"´öânF{+\u0013H":0,"¦úx´\u0000G":-1,"²íj\u001dÇ":true,"Æ\u0019è\"ò\u0004Ï":-6,"\u0011\u0010þ":-10,"w¢öDL":1.3170699479064298,"0Ëké\bÜðþ":true}; };
var argument2 = 82;
var argument3 = r_0;
var argument4 = function() {
 callbackArguments.push(arguments) 
 return 19; };
var argument5 = "D";
var argument6 = function() {
 callbackArguments.push(arguments) 
 return "Ü'Î"; };
var argument7 = r_1;
var argument8 = function() {
 callbackArguments.push(arguments) 
 return 80; };
var argument9 = false;
var base_0 = ["T",82,49]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["T",82,49]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["T",82,49]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["T",82,49]
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightQC/test230.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)