





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return false; };
var argument2 = ["9","^"];
var argument3 = "8";
var argument4 = function() {
 callbackArguments.push(arguments) 
 return {"\u0010ñ\u0000ðU":0.3009227122732683,"Ä\r\u0016\u001c":0,"áø{ÍÄ´Sx\u0007":false,"ó'Ó&":-5,"Àx¼¶ÔÎÔ":0.3026739644946872,"°¨nþ9×|?°":false,"­\u0003Ö~­\u0011¢":27}; };
var argument5 = 595;
var argument6 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument7 = function() {
 callbackArguments.push(arguments) 
 return true; };
var argument8 = r_0;
var argument9 = 1.7976931348623157e+308;
var base_0 = [49,157,"7PG","T",403,100,714,"v","}t5"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [49,157,"7PG","T",403,100,714,"v","}t5"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [49,157,"7PG","T",403,100,714,"v","}t5"]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightQC/test337.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)