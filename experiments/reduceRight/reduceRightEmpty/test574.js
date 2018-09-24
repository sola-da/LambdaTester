





var callbackArguments = [];
var argument1 = function callback(){callbackArguments.push(arguments)};
var argument2 = function callback(){callbackArguments.push(arguments)};
var argument3 = {"126":82,"655":"","1.2859159920695569e+307":"","H":213,"1.1724419915915371e+308":"Q","1.2800661050783014e+308":3.2885912344168796e+307,"":"%IB"};
var argument4 = [618,893];
var argument5 = function callback(){callbackArguments.push(arguments)};
var argument6 = "";
var argument7 = {"o":655,"r":1.3096037234980983e+308,"2.558671727942094e+307":1.0861157339664806e+308,"":"","j6s?":"","&(":627};
var argument8 = function callback(){callbackArguments.push(arguments)};
var argument9 = null;
var base_0 = [627,213,25,49,49,126,460,25]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [627,213,25,49,49,126,460,25]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [627,213,25,49,49,126,460,25]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [627,213,25,49,49,126,460,25]
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightEmpty/test574.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)