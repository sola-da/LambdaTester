





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return 70; };
var argument2 = r_0;
var argument3 = "";
var argument4 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument5 = {"49":"$","('":"","":"q","6.97405181258654e+307":"5","M":"A=","1.7101676502581752e+308":"m","5.53843307924891e+307":","};
var argument6 = function() {
 callbackArguments.push(arguments) 
 return "L¸ìfÅ(rn"; };
var argument7 = function() {
 callbackArguments.push(arguments) 
 return [null,0,2.4944019125905266,true,true,true,-9.629316265538705,null]; };
var argument8 = r_3;
var argument9 = "";
var base_0 = [213,783,157,49,705]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [213,783,157,49,705]
var r_1= undefined
try {
r_1 = base_1.find(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [213,783,157,49,705]
var r_2= undefined
try {
r_2 = base_2.find(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [213,783,157,49,705]
var r_3= undefined
try {
r_3 = base_3.find(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/find/findQC/test11.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)