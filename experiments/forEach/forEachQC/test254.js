





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return true; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return -13.862551966987846; };
var argument3 = false;
var argument4 = {"":"?4#uez),","9.996420631841074e+307":""};
var argument5 = function() {
 callbackArguments.push(arguments) 
 return -94; };
var argument6 = false;
var argument7 = function() {
 callbackArguments.push(arguments) 
 return {"å\u0014½h:\u001f1Úc":0.435964536716537,"\u0017Sl¯)":2.266558642440864,"\u0007°":8," Í":false,"¶\u001dÖÕXZ":false}; };
var argument8 = false;
var argument9 = false;
var base_0 = [49,59,1.7976931348623157e+308]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [49,59,1.7976931348623157e+308]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [49,59,1.7976931348623157e+308]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [49,59,1.7976931348623157e+308]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/forEach/forEachQC/test254.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)