





var callbackArguments = [];
var argument1 = function callback(){callbackArguments.push(arguments)};
var argument2 = {"49":"dHV","403":4.275613133265036e+307,"627":25,"705":7.367298195701558e+307,"w":"7F","":"l","1.4142782591273019e+308":"","@h":1.3721538414359582e+308};
var argument3 = r_0;
var argument4 = function callback(){callbackArguments.push(arguments)};
var argument5 = r_0;
var argument6 = 607;
var argument7 = function callback(){callbackArguments.push(arguments)};
var argument8 = 4.018283839531118e+307;
var argument9 = "";
var argument10 = function callback(){callbackArguments.push(arguments)};
var argument11 = "";
var argument12 = r_3;
var base_0 = [655,403]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [655,403]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [655,403]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [655,403]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightEmpty/test759.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)