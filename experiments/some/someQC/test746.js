





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return 52; };
var argument2 = null;
var argument3 = r_0;
var argument4 = function() {
 callbackArguments.push(arguments) 
 return [null,null,null,1.4325964268191835,-3.058870198997166,-2,18.00166740705495,-32.29715470476382]; };
var argument5 = null;
var argument6 = r_0;
var argument7 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument8 = false;
var argument9 = function() {
 callbackArguments.push(arguments) 
 return 21; };
var base_0 = [655,0,403,242]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [655,0,403,242]
var r_1= undefined
try {
r_1 = base_1.some(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [655,0,403,242]
var r_2= undefined
try {
r_2 = base_2.some(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [655,0,403,242]
var r_3= undefined
try {
r_3 = base_3.some(argument9)
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
require("fs").writeFileSync("./experiments/some/someQC/test746.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)