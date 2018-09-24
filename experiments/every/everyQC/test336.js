





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return "@wÛ®¿µè"; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return true; };
var argument3 = null;
var argument4 = r_0;
var argument5 = function() {
 callbackArguments.push(arguments) 
 return false; };
var argument6 = function() {
 callbackArguments.push(arguments) 
 return true; };
var argument7 = {"9":714,"126":"d","595":1.7851690667848995e+308,"969":705,"{":3.2768122113772786e+307,"7.199462034830367e+307":460,"1.3382251933623215e+308":"GA","":1.6876019566301912e+308,"6.26129877936528e+306":""};
var argument8 = {};
var base_0 = [5e-324,";3N","-","N","k"]
var r_0= undefined
try {
r_0 = base_0.every(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [5e-324,";3N","-","N","k"]
var r_1= undefined
try {
r_1 = base_1.every(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [5e-324,";3N","-","N","k"]
var r_2= undefined
try {
r_2 = base_2.every(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [5e-324,";3N","-","N","k"]
var r_3= undefined
try {
r_3 = base_3.every(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/every/everyQC/test336.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)