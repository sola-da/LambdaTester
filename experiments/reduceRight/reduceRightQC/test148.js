





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return {"í":-0.5068014207761096,"J«+Ct":0,"\u001fÁÅûI`orC":-2.040417366827569,"å±":-0.36327528686162225,"":false,"e\tX\u0000":13,"`ñåµÜ":false}; };
var argument2 = [627,"I","4l",595,5e-324,"{"];
var argument3 = {"242":"y","843":"","1.103862281022321e+308":1.5734174244186152e+308,"":"9","1.5273455346198765e+308":"-"};
var argument4 = function() {
 callbackArguments.push(arguments) 
 return 26.87755229313671; };
var argument5 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument6 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument7 = r_2;
var argument8 = ["L","(]","&:"];
var base_0 = ["+DJ`yw",";","]^","J"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["+DJ`yw",";","]^","J"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightQC/test148.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)