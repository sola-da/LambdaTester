





var callbackArguments = [];
var argument1 = function callback(){callbackArguments.push(arguments)};
var argument2 = [893,"O^*9","8HV",157,"a",100,25];
var argument3 = true;
var argument4 = function callback(){callbackArguments.push(arguments)};
var argument5 = null;
var argument6 = null;
var argument7 = function callback(){callbackArguments.push(arguments)};
var argument8 = {"607":" F","1.1110208862283713e+308":7.91404180687964e+305,"":"","1.5720410617623581e+308":""};
var argument9 = function callback(){callbackArguments.push(arguments)};
var argument10 = true;
var argument11 = [59,595,126,-100,655,122,705,0,213];
var base_0 = [893,100,627,"10",655,607]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,100,627,"10",655,607]
var r_1= undefined
try {
r_1 = base_1.some(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,100,627,"10",655,607]
var r_2= undefined
try {
r_2 = base_2.some(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,100,627,"10",655,607]
var r_3= undefined
try {
r_3 = base_3.some(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/some/someEmpty/test555.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)