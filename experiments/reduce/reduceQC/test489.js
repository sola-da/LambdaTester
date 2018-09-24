





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return "¬@"; };
var argument2 = null;
var argument3 = function() {
 callbackArguments.push(arguments) 
 return -19.172836097838974; };
var argument4 = null;
var argument5 = null;
var argument6 = function() {
 callbackArguments.push(arguments) 
 return "²³"; };
var argument7 = {"9":25,"82":213,"893":"",";QYHR8h":"","":"8A","-100":6.187638782142163e+307,"1.4232315858213301e+308":"C","f":"o","1.5392185658674475e+308":157};
var argument8 = function() {
 callbackArguments.push(arguments) 
 return "+®Ë\u0015Í"; };
var argument9 = 7.016661313723579e+306;
var argument10 = false;
var base_0 = [5e-324,122,-1,1.7976931348623157e+308,59,893,893,627]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [5e-324,122,-1,1.7976931348623157e+308,59,893,893,627]
var r_1= undefined
try {
r_1 = base_1.reduce(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [5e-324,122,-1,1.7976931348623157e+308,59,893,893,627]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [5e-324,122,-1,1.7976931348623157e+308,59,893,893,627]
var r_3= undefined
try {
r_3 = base_3.reduce(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/reduce/reduceQC/test489.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)