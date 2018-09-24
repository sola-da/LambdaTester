





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return [true,0,1,null,10,3,null,false]; };
var argument2 = 49;
var argument3 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument4 = r_0;
var argument5 = true;
var argument6 = function() {
 callbackArguments.push(arguments) 
 return 75.376781583044; };
var argument7 = true;
var argument8 = function() {
 callbackArguments.push(arguments) 
 return "Ý\u0016\u001fx£üV$o"; };
var argument9 = true;
var base_0 = ["|",213,893,627,460,59,"i"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.filter(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["|",213,893,627,460,59,"i"]
var r_2= undefined
try {
r_2 = base_2.filter(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.filter(argument8,argument9)
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
require("fs").writeFileSync("./experiments/filter/filterQC/test365.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)